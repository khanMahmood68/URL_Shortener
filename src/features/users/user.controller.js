import UserModel from "./user.model.js";
import jwt from "jsonwebtoken";

export default class UserController {
  signUp(req, res) {
    const { name, email, password } = req.body;
    const user = UserModel.signup(name, email, password);
    return res.status(201).send(user);
  }

  signIn(req, res) {
    try {
      const { email, password } = req.body;
      const user = UserModel.signin(email, password);

      if (user) {
        // 1.Create token
        const token = jwt.sign(
          {
            userId: user.id,
            email: user.email,
          },
          "W3TTicPh5aeEM6aB353TWiHUAwCPM6Pu",
          {
            expiresIn: "1h",
          }
        );

        // 2.Send Token
        return res.status(200).send(token);
      } else {
        return res.status(400).send("Incorrect Credentials");
      }
    } catch (err) {
      console.error("Error in signIn:", err);
      res.status(500).send("Internal Server Error");
    }
  }

  getAllUser(req, res) {
    const users = UserModel.getAll();
    return res.status(200).send(users);
  }
}
