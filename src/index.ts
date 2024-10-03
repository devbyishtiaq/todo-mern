// src/app.ts
import express, { Application } from "express";
import dotenv from "dotenv";
import todoRoutes from "./routes/todoRoutes";
import errorHandler from "./middlewares/errorHandler";

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Register routes
app.use("/todos", todoRoutes);

// Error handling middleware
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
