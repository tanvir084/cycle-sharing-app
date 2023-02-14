const jwt = require('jsonwebtoken');
const { authConfig } = require('../config');

const authToken = async (req, res, next) => {
  const accessToken = req.header('auth-access-token');
  const refreshToken = req.header('auth-refresh-token');
  if (!accessToken) return res.status(401).send('Access Denied');

  // console.log(accessToken);
  try {
    const token = accessToken.split(' ')[1];
    var verified = await jwt.verify(
      token,
      authConfig.ACCESS_TOKEN_SECRET,
      authConfig.option_access_token
    ); //use  .split(), because token will have 'Bearer' at 1st position.
    const { _id } = await verified;
    req.userId = _id;
    next();
  } catch (err) {
    res
      .status(400)
      .send({ success: false, message: 'Authentication failure!' });
  }
};

module.exports = { authToken };
