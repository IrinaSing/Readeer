const jwt = require('jsonwebtoken');
const JWT_SECRET = require('../config/tokens');

const isValidToken = async (token, userId) => {
  try {
    const decoded = jwt.verify(token, JWT_SECRET);

    console.log('Token decoded: ', decoded);

    if (decoded.userId === userId && decoded.exp > Date.now()) {
      return true;
    } else {
      throw new Error('Invalid token');
    }
  } catch (error) {
    return false;
  }
};

module.exports = isValidToken;
