const express = require("express");
const server = express();
const projectsRouter = require("./projects/projects-router");
const actionsRouter = require("./actions/actions-router");
const logger = require("./actions/actions-middlware");
const projectsLogger = require("./projects/projects-middleware");
server.use(express.json());

server.use("/api/projects", projectsLogger, projectsRouter);
server.use("/api/actions", logger, actionsRouter);

server.get("/", (req, res) => {
  res.send("Hello World");
});

// Configure your server here
// Build your actions router in /api/actions/actions-router.js
// Build your projects router in /api/projects/projects-router.js
// Do NOT `server.listen()` inside this file!

module.exports = server;
