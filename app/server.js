const express = require("express");
const server = express();
const routes = require("./routes");
const { connectToDataBase } = require("./utils/connectToDb");
const PORT = 8080; 
server.use(routes);
//Conect To Mongodb
connectToDataBase((error) => {
  if (!error) {
    server.listen(PORT, () => console.log("server run on port " + PORT));
  }
});
