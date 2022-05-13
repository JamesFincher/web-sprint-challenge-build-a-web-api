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
module.exports = { logger, validateActionId };
