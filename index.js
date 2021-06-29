const app = require("./app");
const { listenPort } = require("./globals");

app.listen(listenPort, () => {
  console.log(`Server listening on port: ${listenPort}`);
});
// use this file for normal startup of the app
