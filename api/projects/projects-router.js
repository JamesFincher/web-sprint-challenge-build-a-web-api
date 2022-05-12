const express = require("express");
const projects = require("./projects-model");
const { projectsLogger, validateId } = require("./projects-middleware");

const projectsRouter = express.Router();

projectsRouter.get("/", (req, res) => {
  console.log("get / pinged");
  projects.get().then((projects) => {
    res.status(200).json(projects);
  });
});

projectsRouter.get("/:id", validateId, (req, res) => {
  console.log("get /:id ping");

  if (!req.params.id) {
    res.status(404).json({ message: "Project ID not valid" });
  } else {
    projects.get(req.params.id).then((project) => {
      res.status(200).json(project);
    });
  }
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
