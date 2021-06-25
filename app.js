const express = require('express');
const { listenPort } = require('./globals');

const app = express();

app.listen(listenPort)

console.log(`Server listening on port: ${listenPort}`)