import express from "express";
import { createTodo, getTodo, getAllTodos } from "../controllers/todos.js";

export const router = express.Router();

router.route("/").post(createTodo).get(getAllTodos);
router.route("/:id").get(getTodo);
