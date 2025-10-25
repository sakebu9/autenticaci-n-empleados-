import { Router } from "express";
const router = Router();

import { createUser } from "../controllers/user.controller.js";
import { authRequired,isAdmin } from "../middlewares/validateToken.js";
import {  checkRolesExisted  } from "../middlewares/verifysingup.js";

router.post("/createuser",authRequired, isAdmin,checkRolesExisted,createUser,);

export default router;