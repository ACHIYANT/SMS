const UserService = require("../services/user-service");

const userService = new UserService();

const create = async (req, res) => {
  console.log("BODY RECEIVED:", req.body);
  try {
    const response = await userService.create({
      empcode: req.body.empcode,
      fullname: req.body.fullname,
      mobileno: req.body.mobileno,
      password: req.body.password,
      designation: req.body.designation,
      division: req.body.division,
    });
    return res.status(201).json({
      success: true,
      message: "Successfully created a new user",
      data: response,
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(error.statusCode).json({
      message: error.message,
      data: {},
      success: false,
      err: error.explanation,
    });
  }
};

const signIn = async (req, res) => {
  try {
    const response = await userService.signIn(
      req.body.mobileno,
      req.body.password
    );
    return res.status(200).json({
      success: true,
      message: "Successfully Signed in",
      data: response,
      err: {},
    });
  } catch (error) {
    console.log("controller 121 : ", error.statusCode);
    return res.status(error.statusCode).json({
      message: error.message,
      data: {},
      success: false,
      err: error.explanation,
    });
  }
};

const isAuthenticated = async (req, res) => {
  try {
    const token = req.headers["x-access-token"];
    const response = await userService.isAuthenticated(token);
    return res.status(200).json({
      success: true,
      message: "User is authenticated and token is valid.",
      data: response,
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Something went wrong",
      data: {},
      success: false,
      err: error,
    });
  }
};
const isAdmin = async (req, res) => {
  try {
    console.log("entering controller");
    const response = await userService.isAdmin(req.body.id);
    return res.status(200).json({
      success: true,
      message: "Successfully fetched whether user is admin or not.",
      data: response,
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Something went wrong while fetching isAdmin.",
      data: {},
      success: false,
      err: error,
    });
  }
};
module.exports = {
  create,
  signIn,
  isAuthenticated,
  isAdmin,
};
