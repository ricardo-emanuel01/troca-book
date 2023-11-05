const { User } = require("../database/models");
const bcrypt = require("bcryptjs");

class AuthController {
  async signup(req, res) {
    const { name, email, password, city, state } = req.body;
    try {
      const emailExist = await User.findOne({
        where: {
          email: email,
        },
      });

      if (emailExist) {
        return res.status(400).json({
          message: "Email already registered",
        });
      }

      const hashPassword = await bcrypt.hash(password, 10);

      const createdUser = await User.create(
        {
          fullName: name,
          email: email,
          password: hashPassword,
          city: city,
          state: state,
        },
        {
          attributes: ['id', 'name', 'email', 'city', 'state'],
        }
      );

      res.status(201).json({
        message: "User created successfully",
        user: createdUser,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: "Internal Server Error",
      });
    }
  }
}

module.exports = AuthController;

