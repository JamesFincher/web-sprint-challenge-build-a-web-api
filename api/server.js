const express = require("express");
const server = express();
const projectsRouter = require("./projects/projects-router");
const actionsRouter = require("./actions/actions-router");
const { logger, validateActionId } = require("./actions/actions-middlware");
const {
  projectsLogger,
  validateId,
} = require("./projects/projects-middleware");
server.use(express.json());
server.use(validateId);
server.use("/api/projects", projectsLogger, projectsRouter);
server.use("/api/actions", logger, actionsRouter);

server.get("/", (req, res) => {
  res.send("Hello World");
});

server.use("*", (req, res) => {
  res.status(404).json({ message: "Are you lost? Resource not found!" });
});

// Configure your server here
// Build your actions router in /api/actions/actions-router.js
// Build your projects router in /api/projects/projects-router.js
// Do NOT `server.listen()` inside this file!

module.exports = server;
