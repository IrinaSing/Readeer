const registerManager = require("../business-logic/register");

const registerController = {
  post: async (req, res) => {
    try {
      const { firstName, lastName, birthday, email, username, password, city } =
        req.body;

      const result = await registerManager.register(
        firstName,
        lastName,
        birthday,
        email,
        username,
        password,
        city
      );
      res.status(200).json(result);
    } catch (error) {
      if (error.message === "User already exists") {
        res.json({ error: error.message });
      } else {
        res.status(500).json({ error: error.message });
      }
    }
  },
};

module.exports = registerController;
