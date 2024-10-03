// src/routes/todoRoutes.ts
import { Router } from "express";
import {
  createTodoHandler,
  getTodosHandler,
  updateTodoHandler,
  deleteTodoHandler,
} from "../controllers/todoController";

const router = Router();

router.post("/", createTodoHandler);
router.get("/", getTodosHandler);
router.put("/:id", updateTodoHandler);
router.delete("/:id", deleteTodoHandler);

export default router;
