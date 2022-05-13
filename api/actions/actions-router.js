const express = require("express");
const actions = require("./actions-model");
const { logger, validateActionId } = require("./actions-middlware");
const { router } = require("../server");

const actionRouter = express.Router();

actionRouter.get("/", (req, res) => {
  actions.get().then((actions) => {
    res.status(200).json(actions);
  });
});
actionRouter.get("/:id", validateActionId, (req, res) => {
  actions.get(req.params.id).then((action) => {
    res.status(200).json(action);
  });
});
actionRouter.get("/", (req, res) => {
  res.end;
});
actionRouter.get("/", (req, res) => {
  res.end;
});
actionRouter.get("/", (req, res) => {
  res.end;
});

module.exports = actionRouter;
