const express = require("express");
const projects = require("./projects-model");
function projectsLogger(req, res, next) {
  console.log(
    `${req.method} ${req.path} has been PINGED using PROJECT logger.... BODY: ${req.body}`
  );
  next();
}

function validateId(req, res, next) {
  const { id } = req.params;
  console.log(`ID to be validated is ${id}`);
  projects.get(id).then((project) => {
    if (project) {
      next();
    } else {
      res.status(404).json({ message: "Project ID not valid" });
    }
  });
}

function postValidate(req, res, next) {
  const { description, name } = req.body;
  if (description && name) {
    next();
  } else {
    res.status(400).json({ message: "Missing required fields" });
  }
}

function putValidate(req, res, next) {
  const { completed } = req.body;
  if (completed === undefined) {
    res.status(400).json({ message: "Completed status is required!" });
  } else {
    next();
  }
}
module.exports = {
  projectsLogger,
  validateId,
  postValidate,
  putValidate,
};
