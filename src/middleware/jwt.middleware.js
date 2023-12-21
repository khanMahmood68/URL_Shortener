import jwt from "jsonwebtoken";

const jwtAuth = (req, res, next) => {
  // 1.Read the token
  const token = req.headers["authorization"];

  // 2.If no token, return the error
  if (!token) {
    return res.status(401).send("Unauthorized");
  }

  // 3.Check if token is valid
  try {
    const payload = jwt.verify(token, "W3TTicPh5aeEM6aB353TWiHUAwCPM6Pu");
    req.userId = payload.userId;
    console.log("Payload", payload);
  } catch (error) {
    // 4.Return error
    console.log(error);
    return res.status(401).send("Unauthorized");
  }
  // 5.Call next middleware
  next();
};

export default jwtAuth;
