const express = require('express');
const expressApp = require('./app');


//DATABASE STARTING LOGIC
//START SERVER
const startServer = async () => {
  const app = express();
  await expressApp(app);
  app.listen(3000);
};
startServer();

// const http = require('http');
// const app = require('./app');
// const port = process.env.PORT || 3000;

// const server = http.createServer(app);

// server.listen(port);