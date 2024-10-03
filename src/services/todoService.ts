import { Prisma } from "@prisma/client";
import prisma from "../models";

export const createTodo = async (title: string, categoryId?: string) => {
  const data: Prisma.TodoCreateInput = {
    title,
    ...(categoryId && {
      category: {
        connect: { id: categoryId },
      },
    }),
  };

  return await prisma.todo.create({ data });
};

export const getAllTodos = async () => {
  return await prisma.todo.findMany({
    include: {
      category: true,
    },
  });
};

export const updateTodo = async (id: string, data: Prisma.TodoUpdateInput) => {
  return await prisma.todo.update({
    where: { id },
    data,
  });
};

export const deleteTodo = async (id: string) => {
  return await prisma.todo.delete({
    where: { id },
  });
};
