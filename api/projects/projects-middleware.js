const express = require("express");
function projectsLogger(req, res, next) {
  console.log(
    `${req.method} ${req.path} has been PINGED using PROJECT logger.... BODY: ${req.body}`
  );
  next();
}

module.exports = projectsLogger;
