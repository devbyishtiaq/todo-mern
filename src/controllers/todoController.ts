// src/controllers/todoController.ts
import { Request, Response, NextFunction } from "express";
import {
  createTodo,
  deleteTodo,
  getAllTodos,
  updateTodo,
} from "../services/todoService";

export const createTodoHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { title, categoryId } = req.body;
    const newTodo = await createTodo(title, categoryId);
    res.status(201).json(newTodo);
  } catch (error) {
    next(error);
  }
};

export const getTodosHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const todos = await getAllTodos();
    res.status(200).json(todos);
  } catch (error) {
    next(error);
  }
};

export const updateTodoHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const { title, completed } = req.body;
    const updatedTodo = await updateTodo(id, { title, completed });
    res.status(200).json(updatedTodo);
  } catch (error) {
    next(error);
  }
};

export const deleteTodoHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    await deleteTodo(id);
    res.status(200).json({ message: "Todo deleted successfully" });
  } catch (error) {
    next(error);
  }
};
