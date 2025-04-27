const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
app.use(cors());
const { PORT } = require("./config/serverConfig");

const ApiRoutes = require("./routes/index");

const setUpAndStartServer = async () => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use("/api", ApiRoutes);

  app.listen(PORT, () => {
    console.log(`server started at ${PORT}`);
  });
};
setUpAndStartServer();
