const UserRepository = require("../repository/user-repository");
const jwt = require("jsonwebtoken");
const { JWT_KEY } = require("../config/serverConfig");
const bcrypt = require("bcrypt");

class UserService {
  constructor() {
    this.UserRepository = new UserRepository();
  }

  async create(data) {
    try {
      const user = await this.UserRepository.create(data);
      return user;
    } catch (error) {
      console.log("Something went wrong in the service layer.");
      throw error;
    }
  }

  async signIn(mobileno, plainPassword) {
    try {
      // ? step 1 -> fetch the user using the mobile no.
      const user = await this.UserRepository.getByMobileNo(mobileno);
      // ? step 2 -> Compare incoming plane password with the stored encrypted password.
      const passwordMatch = this.checkPassword(plainPassword, user.password);
      if (!passwordMatch) {
        console.log("Password doesn't match.");
        throw { error: "Incorrect password" };
      }
      //? step 3 -> If password match then create a token and send it to the user.
      const newJWT = this.createToken({ mobileno: user.mobileno, id: user.id });
      return newJWT;
    } catch (error) {
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
}
module.exports = UserService;
