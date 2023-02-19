const mongoose = require('mongoose');
mongoose.set('debug', true);

const transactionSchema= new mongoose.Schema({
  startTime: Date,
  endTime: Date,
  providerInfo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Provider',
  },
  userInfo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  amount: Number,
  duration: Number,
  paid: {
    type: Boolean,
    default: false,
  },
  state: String,
  created_at: { type: Date },
  updated_at: { type: Date }
},
{ timestamps: true } 
);

const Transaction = mongoose.model(
    "Transaction", transactionSchema
    );
  
module.exports = Transaction;
