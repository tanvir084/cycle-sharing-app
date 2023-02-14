// const authJwt = require("./authJwt");
const checkDuplicate = require("./verifySignUp");
const {addHeader} = require('./header');
const {authToken}=require('./verifyToken');

module.exports = {
    ...checkDuplicate,
    addHeader,
    authToken,
}