const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const { PORT } = require("./config/serverConfig");
const apiRoutes = require("./routes/index");
const bodyParser = require("body-parser");

// const db = require("./models/index");
const { User, Role } = require("./models/index");

// const bcrypt = require("bcrypt");
// const { User } = require("./models/index");
// const UserRepository  = require("./repository/user-repository");
// const UserService = require("./services/user-service");

const prepareAndStartServer = () => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use("/api", apiRoutes);
  app.listen(PORT, async () => {
    console.log(`Server Started At PORT ${PORT}`);
    if (process.env.DB_SYNC) {
      db.sequelize.sync({ alter: true });
    }

    // const u1 = await User.findByPk(4);
    // const r1 = await Role.findByPk(1);
    // u1.addRole(r1);

    // const r2 = await Role.findByPk(2);
    // u1.addRole(r2);

    // const response = await  u1.getRoles();
    // console.log(r .esponse);
    // const repo = new UserRepository();
    // const response = await repo.getById(3);
    // console.log(response);
    // const incomingPassword = "Hartron@123";
    // const user = await User.findByPk(5);
    // const response = bcrypt.compareSync(incomingPassword, user.password);
    // console.log(response);

    // const service = new UserService();
    // const newToken = service.createToken({email: 'abc@gmail.com', id:1});
    // console.log("new token is ", newToken);

    // const token =
    //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFiY0BnbWFpbC5jb20iLCJpZCI6MSwiaWF0IjoxNzQ0NjQ5ODc4LCJleHAiOjE3NDQ2NDk5MDh9.x6ioFOQX2b2k2tx7Ze5faYwpgNZWgssEKFSuwI2SlMc";

    // const response = service.verifyToken(token);
    // console.log(response);
  });
};

prepareAndStartServer();
