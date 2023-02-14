const authRouter = require("./auth.routes");
const providerRouter = require("./provider.routes");

module.exports={
    ...authRouter,
    ...providerRouter,
}