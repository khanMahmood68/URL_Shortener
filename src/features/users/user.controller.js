import jwt from "jsonwebtoken";
import UserRepository from "./user.repository.js";
import bcrypt from "bcrypt";

export default class UserController {
  constructor() {
    // Create an instance of UserRepository to interact with the database
    this.userRepository = new UserRepository();
  }

  async signUp(req, res) {
    try {
      const { name, email, password } = req.body;

      // Hash the user's password before saving it in the database
      const hashedPassword = await bcrypt.hash(password, 12);

      const newUser = {
        name,
        email,
        password: hashedPassword,
      };

      // Save the new user to the database
      await this.userRepository.signup(newUser);

      // Respond with the newly created user
      return res.status(201).send(newUser);
    } catch (error) {
      console.error("Error in signUp:", error);
      res.status(500).send("Internal Server Error");
    }
  }

  async signIn(req, res) {
    try {
      const { email, password } = req.body;
      console.log("user", req.body);

      // Find the user by email in the database
      const user = await this.userRepository.findByEmail(email);

      if (!user) {
        // If the user is not found, respond with an appropriate message
        return res.status(400).send("Incorrect Credentials");
      } else {
        // Check if the entered password matches the stored hashed password
        const result = await bcrypt.compare(password, user.password);
        if (result) {
          // 1.Create token
          const token = jwt.sign(
            {
              userId: user.id,
              email: user.email,
            },
            process.env.JWT_SECRET,
            {
              expiresIn: "1h",
            }
          );

          // 2.Send Token
          return res.status(200).send(token);
        } else {
          return res.status(400).send("Incorrect Credentials");
        }
      }
    } catch (err) {
      console.error("Error in signIn:", err);
      res.status(500).send("Internal Server Error");
    }
  }
}
