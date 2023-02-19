const { authConfig } = require('../config');
const db = require('../models');
const bcrypt = require('bcrypt');
//const { distanceToPriceCalculator } = require('../utils');


const User = db.user;
const Provider = db.provider;

const signUpController = async (req, res) => {
  const { email, name, role } = req?.body;
  try {
    //CREATE A NEW USER
    //HASHED PASSWORD
    const hashedPassword = await bcrypt.hash(req?.body?.password, 10);
    let user = new User({
      name, 
      email, 
      password: hashedPassword,
      role
    });

    // SAVE NEW USER DATA INTO DB
    user = await user.save();
    // console.log(savedUser);
    return res.status(201).send({ success: true, message: 'User Created successfully', data: user });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ success: false, message: err });
  }
};

const signInController = async (req, res) => {
  //console.log(distanceToPriceCalculator(5, 10));
  try {
    let user = await User.findOne({ email: req.body.email });
    if (!user)
      return res
        .status(400)
        .send({ success: false, message: 'Invalid Email or Password.' });

    // CHECK PASSWORD
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if (!validPass)
      return res.status(400).json({
        success: false,
        message: 'Email or Password is wrong',
    });
    
    return res.status(200).send({
      success: true,
      message: 'Logged In Successfully!',
      data: user,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ success: false, message: err });
  }
}

const getController = async (req, res) => {
  try {
    let users = await User.find({});
    if (!users?.length)
      return res
        .status(400)
        .send({ success: false, message: 'Users not found.' });
    
      return res.status(200).send({
        success: true,
        message: 'Users found successfully',
        data: users
      });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ success: false, message: err });
  }
}

const userProfile = async (req, res) => {
  const userId = req?.params?.userId;
  try {
    const userInfo = await User.findById(userId);
    if (!userInfo)
      return res
        .status(400)
        .send({ success: false, message: 'User info not found.' });


    return res.status(201).send({ success: true, message: 'User info found sucessfully', data: userInfo });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ success: false, message: err });
  }
}

const providerProfile = async (req, res) => {
  const providerId = req?.params?.providerInfoId;
  try {
    const providerInfo = await Provider.findById(providerId)
      .populate('user', 'name email');
    if (!providerInfo)
      return res
        .status(400)
        .send({ success: false, message: 'Provider info not found.' });


    return res.status(201).send({ success: true, message: 'Provider info found sucessfully', data: providerInfo });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ success: false, message: err });
  }
}

module.exports = {
  signUpController,
  signInController,
  getController,
  userProfile,
  providerProfile
};
