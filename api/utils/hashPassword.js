const crypto = require('crypto-js');

function hashPassword(password) {
  return crypto.createHash('sha3-256').update(password).digest('hex');
}

module.exports = hashPassword;
