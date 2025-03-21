const express = require("express");
const projects = require("./projects-model");
const {
  projectsLogger,
  putValidate,
  validateId,
  postValidate,
} = require("./projects-middleware");

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

projectsRouter.post("/", postValidate, (req, res) => {
  project = req.body;
  console.log("post / pinged");
  console.log(req.body);
  projects.insert(project).then((project) => {
    res.status(201).json(project);
  });
});

projectsRouter.put(
  "/:id",
  validateId,
  putValidate,
  postValidate,
  (req, res) => {
    console.log("put /:id pinged");
    console.log(req.body);
    const changes = req.body;
    console.log(changes);
    projects.update(req.params.id, changes).then((project) => {
      res.status(200).json(changes);
    });
  }
);

projectsRouter.delete("/:id", validateId, (req, res) => {
  console.log("delete /:id pinged");
  projects.remove(req.params.id).then((project) => {
    res.status(200).json(project);
  });
});

projectsRouter.get("/:id/actions", validateId, (req, res) => {
  const projectId = req.params.id;
  projects.getProjectActions(projectId).then((actions) => res.json(actions));
});

module.exports = projectsRouter;
