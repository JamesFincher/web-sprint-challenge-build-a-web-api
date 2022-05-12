const express = require("express");
const projects = require("./projects-model");
const middleware = require("./projects-middleware");

const projectsRouter = express.Router();

projectsRouter.get("/", (req, res) => {
  console.log("get / pinged");
  res.end();
});

projectsRouter.get("/:id", (req, res) => {
  console.log("get /:id pinged");
  res.end();
});

projectsRouter.post("/", (req, res) => {
  console.log("post / pinged");
  console.log(req.body);
  res.end();
});

projectsRouter.put("/:id", (req, res) => {
  console.log("put /:id pinged");
  console.log(req.body);
  res.end();
});

projectsRouter.delete("/:id", (req, res) => {
  console.log("delete /:id pinged");
  res.end();
});

projectsRouter.get("/:id/actions", (req, res) => {
  console.log("get /:id/actions pinged");
  res.end();
});

module.exports = projectsRouter;
