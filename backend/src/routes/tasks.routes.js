import { Router } from "express";

import {
  getTasks,
  getTask,
  createTask,
  deleteTask,
  updateTask,
} from "../controllers/tasks.controller.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { authRequired,isAdmin } from "../middlewares/validateToken.js";
import { createTaskSchema } from "../schemas/tasks.schema.js";

const router = Router();

router.get("/tasks", authRequired, isAdmin , getTasks);

router.get("/tasks/:id", authRequired, getTask);

router.post(
  "/tasks",
  authRequired,
  validateSchema(createTaskSchema),
  createTask
);

router.delete("/tasks/:id", authRequired, deleteTask);

router.put("/tasks/:id", authRequired, updateTask);

export default router;
