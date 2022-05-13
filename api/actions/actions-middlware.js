const express = require("express");
const actions = require("./actions-model");

function logger(req, res, next) {
  console.log(`${req.method} ${req.path} has been PINGED using ACTION logger`);
  next();
}

function validateActionId(req, res, next) {
  const { id } = req.params;
  console.log(`ID to be validated is ${id}`);
  actions.get(id).then((project) => {
    if (project) {
      next();
    } else {
      res.status(404).json({ message: "Project ID not valid" });
    }
  });
}

function validateActionInput(req, res, next) {
  const { description, notes, project_id } = req.body;
  if (!description || !notes || !project_id) {
    res.status(400).json({
      message:
        "Description, Notes, and Project_Id are all required for posts :)",
    });
  } else {
    next();
  }
}

function validateActionUpdate(req, res, next) {
  const { completed } = req.body;
  if (completed === undefined) {
    res
      .status(400)
      .json({ message: "Completed status is required for updates" });
  } else {
    next();
  }
}
module.exports = {
  logger,
  validateActionId,
  validateActionInput,
  validateActionUpdate,
};
