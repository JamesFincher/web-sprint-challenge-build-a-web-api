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

module.exports = {
  projectsLogger,
  validateId,
};
