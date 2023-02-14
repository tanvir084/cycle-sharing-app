const { decode } = require('jsonwebtoken');

const verifyTokenExpiration = (token) => {
  try {
    return token.expiredAt.getTime() < new Date().getTime(); //if expired, return false; else, return true;
  } catch (err) {
    console.log(err);
  }
  // ;
};
module.exports = {
  verifyTokenExpiration,
};
