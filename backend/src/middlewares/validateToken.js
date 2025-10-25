import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";
import User from "../models/user.model.js";
import Role from "../models/role.model.js";

export const authRequired = (req, res, next) => {
  const { token } = req.cookies;
  if (!token)
    return res.status(401).json({ message: "No token, Authorization denied" });

  const decoded = jwt.verify(token, TOKEN_SECRET);
  req.userId = decoded.id;

  const user = User.findById(req.userId, { password: 0 }).populate("role");
  if (!user)
    return res.status(401).json({ message: "The user does not exist" });

  jwt.verify(token, TOKEN_SECRET, (err, user) => {
    if (err) return res.status(401).json({ message: "Token is not valid" });

    req.user = user;

    next();
  });
};

export const isAdmin = async (req, res, next) => {
  const user = await User.findById(req.userId);
  const roles = await Role.find({ _id: { $in: user.role } });

  for (let i = 0; i < roles.length; i++) {
    if (roles[i].name === "admin") {
      next();
      return;
    }
  }
  return res.status(403).json({ message: "Require Admin Role" });
};
