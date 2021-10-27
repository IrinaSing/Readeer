const loginManager = require("../business-logic/login");

const loginController = {
  post: async (req, res) => {
    try {
      const { email: email, password } = req.body;
      const result = await loginManager.checkPassword(email, password);
      res.status(200).json(result);
    } catch (error) {
      if (error.message === "Invalid username or password!") {
        res.json({ error: error.message });
      } else {
        res.status(500).json({ error: error.message });
      }
    }
  },
};

module.exports = loginController;
