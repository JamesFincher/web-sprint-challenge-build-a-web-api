const express = require("express");
const projects = require("./projects-model");
const middleware = require("./projects-middleware");

const router = express.Router();

router.get("/", (req, res) => {
  console.log("get / pinged");
  res.end();
});

router.get("/:id", (req, res) => {
  console.log("get /:id pinged");
  res.end();
});

router.post("/", (req, res) => {
  console.log("post / pinged");
  console.log(req.body);
  res.end();
});

router.put("/:id", (req, res) => {
  console.log("put /:id pinged");
  console.log(req.body);
  res.end();
});

router.delete("/:id", (req, res) => {
  console.log("delete /:id pinged");
  res.end();
});

router.get("/:id/actions", (req, res) => {
  console.log("get /:id/actions pinged");
  res.end();
});

module.exports = router;
