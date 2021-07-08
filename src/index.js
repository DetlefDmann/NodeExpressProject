import app from "./app.js";
import { listenPort } from "./globals.js";

app.listen(listenPort, () => {
  console.log(`Server listening on port: ${listenPort}`);
});
// use this file for normal startup of the app
