import express from "express";
import path from "path";

const app = express();
const __dirname = path.resolve();

app.use(express.static(path.join(__dirname, "src")));

app.get("/", (req, res) => {
  res.sendStatus(200);
  res.sendFile(__dirname + "/src/content/index.html");
});
app.get("/data", (req, res) => {
  res.send({});
});

export default app;
