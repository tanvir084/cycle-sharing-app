const {
  signUpController,
  signInController,
  getController,
  userProfile,
  providerProfile,
} = require('../controller');
const express = require('express');

const { 
  checkDuplicateStudent
} = require('../middlewares');

const authRouter = express.Router();

authRouter.post(
  '/api/auth/signup', 
  checkDuplicateStudent,
  signUpController,
);

authRouter.post('/api/auth/signin', signInController);
authRouter.get('/api/get/users', getController);

//For profile info
authRouter.get('/api/get/user-profile/:userId', userProfile);
authRouter.get('/api/get/provider-profile/:providerInfoId', providerProfile);


module.exports = {
  authRouter,
};