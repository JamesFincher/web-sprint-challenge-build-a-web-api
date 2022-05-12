const express = require("express");

function logger(req, res, next) {
  console.log(`${req.method} ${req.path} has been PINGED using ACTION logger`);
  next();
}

module.exports = logger;
