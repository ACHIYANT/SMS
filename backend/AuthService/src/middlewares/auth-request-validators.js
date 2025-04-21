const validateUserAuth = (req, res, next) => {
  if (!req.body.mobileno || !req.body.password) {
    return res.status(400).json({
      success: false,
      data: {},
      message: "something went wrong",
      err: "Email or password is missing in the request",
    });
  }
  next();
};
const validateIsAdminRequest = (req, res, next) => {
  if(!req.body.id)
  {
    return res.status(400).json({
      success: false,
      data: {},
      message: "something went wrong",
      err: "User id not given.",
    });
  }
  next();
}
module.exports = {
  validateUserAuth,
  validateIsAdminRequest
};
