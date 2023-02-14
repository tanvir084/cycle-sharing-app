const { boolean } = require('@hapi/joi');
const mongoose = require('mongoose');
mongoose.set('debug', true);

const userSchema= new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  profile_picture: String,
  passwordResetCode: {
    type: String,
    default: "",
  },
  role: {
    type: String,
    enum: ["user", "provider", "admin"],
  },
  created_at: { type: Date },
  updated_at: { type: Date }
 

},
{ timestamps: true } 
);

const User = mongoose.model(
    "User", userSchema
    );
  
module.exports = User;
