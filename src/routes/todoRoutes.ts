import { Router, Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();

// Create a new To-Do
router.post(
  "/",
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { title } = req.body;

      if (!title) {
        res.status(400).json({ error: "Title is required" });
        return;
      }

      const newTodo = await prisma.todo.create({
        data: { title },
      });

      res.status(201).json(newTodo);
    } catch (error) {
      next(error); // Pass the error to the error handling middleware
    }
  }
);

// Get all To-Dos
router.get(
  "/",
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const todos = await prisma.todo.findMany();
      res.status(200).json(todos);
    } catch (error) {
      next(error);
    }
  }
);

// Update a To-Do
router.put(
  "/:id",
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { id } = req.params;
      const { title, completed } = req.body;

      const updatedTodo = await prisma.todo.update({
        where: { id },
        data: { title, completed },
      });

      res.status(200).json(updatedTodo);
    } catch (error) {
      next(error);
    }
  }
);

// Delete a To-Do
router.delete(
  "/:id",
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { id } = req.params;

      await prisma.todo.delete({
        where: { id },
      });

      res.status(200).json({ message: "Todo deleted successfully" });
    } catch (error) {
      next(error);
    }
  }
);

export default router;
