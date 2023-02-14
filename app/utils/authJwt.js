const {authConfig} = require('../config');
const jwt = require("jsonwebtoken");


signAccessToken= async(id)=>{
    const token = await jwt.sign({ _id: id }, authConfig.ACCESS_TOKEN_SECRET, authConfig.option_access_token);
    return token;
}

signRefreshToken= async(id)=>{
    const token = await jwt.sign({ _id: id }, authConfig.REFRESH_TOKEN_SECRET, authConfig.option_refresh_token);
    return token;

}

module.exports={
    signAccessToken,
    signRefreshToken
}
