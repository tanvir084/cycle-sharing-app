const option_access_token={
    expiresIn: '1h'
}
const option_refresh_token={
    expiresIn:  86400// 24 hours, 86400
}
module.exports = {
    ACCESS_TOKEN_SECRET: "ourProfessors-secret-key",
    REFRESH_TOKEN_SECRET: "ourProfessors-refresh-secret-key",
    option_access_token,
    option_refresh_token
  };