const authControllers = require("./auth.controller");
const providerControllers = require('./provider.controller');

module.exports={
    ...authControllers,
    ...providerControllers,
}