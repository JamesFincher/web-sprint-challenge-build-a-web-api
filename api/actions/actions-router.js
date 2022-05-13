const express = require("express");
const actions = require("./actions-model");
const {
  logger,
  validateActionUpdate,
  validateActionId,
  validateActionInput,
} = require("./actions-middlware");
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
actionRouter.post("/", validateActionInput, (req, res) => {
  actions.insert(req.body).then((action) => {
    res.status(201).json(action);
  });
});
actionRouter.put("/:id", validateActionUpdate, (req, res) => {
  actions.update(req.params.id, req.body).then((action) => {
    res.status(200).json(action);
  });
});
actionRouter.delete("/:id", validateActionId, (req, res) => {
  actions.remove(req.params.id).then((action) => {
    res.status(200).json(action);
  });
});

module.exports = actionRouter;
