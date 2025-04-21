const UserRepository = require("../repository/user-repository");
const jwt = require("jsonwebtoken");
const { JWT_KEY } = require("../config/serverConfig");
const bcrypt = require("bcrypt");
const { StatusCodes } = require("http-status-codes");
class UserService {
  constructor() {
    this.UserRepository = new UserRepository();
  }

  async create(data) {
    try {
      const user = await this.UserRepository.create(data);
      return user;
    } catch (error) {
      if (error.name == "SequelizeValidationError") {
        throw error;
      }
      console.log("Something went wrong in the service layer.");
      throw new AppErrors(
        "ServerError",
        "Something went wrong in service",
        "Logical issue found",
        500
      );
    }
  }

  async signIn(mobileno, plainPassword) {
    try {
      // ? step 1 -> fetch the user using the mobile no.
      const user = await this.UserRepository.getByMobileNo(mobileno);
      console.log(user);
      // ? step 2 -> Compare incoming plane password with the stored encrypted password.
      const passwordMatch = this.checkPassword(plainPassword, user.password);
      if (!passwordMatch) {
        console.log("Password doesn't match.");
        return;
        // throw new ClientError(
        //   "PasswordMismatch",
        //   "12Invalid username sent in the request",
        //   "12Please check the email, as there is no record of the username.",
        //   StatusCodes.NOT_FOUND
        // );
        throw { error: "Incorrect password" };
      }
      //? step 3 -> If password match then create a token and send it to the user.
      const newJWT = this.createToken({ mobileno: user.mobileno, id: user.id });
      const fullName = user.fullname;
      const data = {
        newJWT,
        fullName,
      };
      console.log(data);
      return data;
    } catch (error) {
      console.log("error : 12", error.name);
      if (error.name == "AttributeNotFound") {
        throw error;
      }
      // throw new AppErrors(
      //   "Incorrect password",
      //   "Something went wrong in service",
      //   "Logical issue found",
      //   404
      // );

      console.log("Something went wrong in the sign-in");
      throw error;
    }
  }
  async isAuthenticated(token) {
    try {
      const response = this.verifyToken(token);
      if (!response) {
        throw { error: "Invalid Token" };
      }
      const user = await this.UserRepository.getById(response.id);
      if (!user) {
        throw { error: "No user with the corresponding token exists." };
      }
      return user.id;
    } catch (error) {}
  }
  createToken(user) {
    try {
      const result = jwt.sign(user, JWT_KEY, { expiresIn: "1d" });
      return result;
    } catch (error) {
      console.log("Something went wrong in token creation.");
      throw error;
    }
  }
  verifyToken(token) {
    try {
      const response = jwt.verify(token, JWT_KEY);
      return response;
    } catch (error) {
      console.log("Something went wrong in token validation : ", error);
      throw error;
    }
  }

  checkPassword(userInputPlainPassword, encryptedPassword) {
    try {
      return bcrypt.compareSync(userInputPlainPassword, encryptedPassword);
    } catch (error) {
      console.log("Something went wrong in password comparison");
      throw error;
    }
  }

  isAdmin(userId) {
    try {
      return this.UserRepository.isAdmin(userId);
    } catch (error) {
      console.log("Something went wrong in service layer isAdmin function.");
      throw error;
    }
  }
}
module.exports = UserService;
