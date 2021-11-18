import express from "express";
import path from "path";
import { router as todosRouter } from "./routes/todos.js";

const app = express();
const __dirname = path.resolve();

//middleware
app.use(express.static(path.join(__dirname, "/src/content")));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile("/");
});

//routes
app.use("/todos", todosRouter);

export default app;
