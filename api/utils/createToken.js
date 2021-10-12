const jwt = require('jsonwebtoken');

const JWT_SECRET = require('../../config/tokens');

function createToken(user) {
  const payload = {
    iss: 'Hack Your Future Belgium',
    userId: `${user.id}`,
    username: `${user.username}`,
    iat: new Date().getTime(),
    exp: new Date().setDate(new Date().getDate() + 1),
  };

  const token = jwt.sign(payload, JWT_SECRET);

  return token;
}

module.exports = createToken;
