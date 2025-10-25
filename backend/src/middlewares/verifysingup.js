import { ROLES } from "../models/role.model.js";

export const checkRolesExisted = (req, res, next) => {
  if (req.body.role) {
    for (let i = 0; i < req.body.role.length; i++) {
      if (!ROLES.includes(req.body.role[i])) {
        return res.status(400).json({ 
            message: `Role ${req.body.role[i]} does not exist` 
        });
      }
    }
  }
  console.log("wsawdaw");
  next();
};
