const express = require("express");
const actions = require("./actions-model");
const { logger } = require("./actions-middlware");
const { router } = require("../server");

const actionRouter = express.Router();

actionRouter.get("/", (req, res) => {
  res.end;
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
actionRouter.get("/", (req, res) => {
  res.end;
});

module.exports = actionRouter;
