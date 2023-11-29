const express = require('express');
const database = require('./config/index');
const expressApp = require('./app');


//DATABASE STARTING LOGIC
//START SERVER
const startServer = async () => {
  const app = express();
  await database();
  await expressApp(app);
  app.listen(3000);
};
startServer();
