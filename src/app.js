import express from "express";
import path from "path";

const app = express();
const __dirname = path.resolve();

app.use(express.static(path.join(__dirname, "/src/content")));

app.get("/", (req, res) => {
  res.sendFile("/");
});
app.get("/data", (req, res) => {
  res.send({ message: "Dit is random data.." });
});

export default app;
