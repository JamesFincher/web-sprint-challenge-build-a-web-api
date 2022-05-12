const server = require("./api/server");

const port = 4000;

server.listen(port, () =>
  console.log(`\n==> 🌎  API Server now listening on port ${port}!\n`)
);
