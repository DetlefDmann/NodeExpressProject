import express from "express";
import path from "path";

const app = express();
const __dirname = path.resolve();

app.use(express.static(path.join(__dirname, "/src/content")));

app.get("/", (req, res) => {
  res.sendFile("/index.html");
});
app.get("/data", (req, res) => {
  res.send({ message: "hoi" });
});

export default app;
