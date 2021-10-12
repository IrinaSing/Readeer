const loginManager = require('../business-logic/login');

const loginController = {
  post: async (req, res) => {
    try {
      const { email: email, password } = req.body;

      const result = await loginManager.checkPassword(username, password);

      if (result) {
        res.status(200).json(result);
      } else {
        res.status(401).json({
          message: 'Invalid username or password',
        });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = loginController;
