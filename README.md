# NodeExpressProject

To use the docker functionality , first install [Docker](https://docs.docker.com/engine/install/)/[Docker Compose](https://docs.docker.com/compose/install/).

## Make a simple backend

For a previous project I needed a back-end and used a simple external API.
When doing another private project I realised that I should not use someone elses backend if I want to store user-data.
I am therefore trying to learn it for myself.
Since I already know JavaScript , Node and Express seem the obvious tools.
I am using test driven development for this project, both for actual testing before deploying and for declaring what I want the API to return before i'm writing the code.
It also functions as a sort of documentation on how the app is intended to work.

## Use ES6 syntax for importing/exporting

Jest and Node seem to have problems using ES6 syntax.
You would have to use the old way of importing/exporting like so:

Importing:

```javascript
const express = require("express");
```

Exporting:

```javascript
module.exports = { thisFunction, thatVariable };
```

For someone like me, who wants to use ES6 syntax there is a solution.

Some changes in the package.json file should do the trick...

For using ES6 modules in node set type attribute in package.json to module,like this:

```json
    "type": "module",
```

To avoid getting into trouble with Jest, we also need to change how we run the tests by defining the test script as follows:

```json
    "test": "NODE_OPTIONS=--experimental-vm-modules npx jest",
```

Link to relevant info from [Sam Meechward](https://sammeechward.com/jest-and-esmodules/) and Jest [website](https://jestjs.io/docs/ecmascript-modules).
For insight into the difference between Common JS modules and ES6 modules, I found [this website](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/) enlightening.

## Start with a todo-list app

As a starter I am going to set the server up for a todo-list app.
I will use TDD with Jest, so I need to examine how to use Jest with a node/express app and how to test a server.

## Jest and Supertest

I came across a few videos that use a combination of Jest and Supertest. Supertest is a NPM package that provides a high level abstraction for testing HTTP. More on this [here](https://www.npmjs.com/package/supertest).

## Deploying

In the end I would have to deploy the server somewhere.
Options for that are :

- [Heroku](https://www.heroku.com/)
- [Glitch](https://glitch.com/)
