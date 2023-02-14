const {
  signUpController,
  signInController,
  getController,
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


module.exports = {
  authRouter,
};