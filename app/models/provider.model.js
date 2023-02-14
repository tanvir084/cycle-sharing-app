const { boolean } = require('@hapi/joi');
const mongoose = require('mongoose');
mongoose.set('debug', true);

const providerSchema= new mongoose.Schema({
  cyclleName: String,
  cycleModel: String,
  cycleNumber: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  parkingPlaceLat: Number, 
  parkingPlaceLong: Number,
  perHourPrice: Number,
  availability: Boolean,
  created_at: { type: Date },
  updated_at: { type: Date }
},
{ timestamps: true } 
);

const Provider = mongoose.model(
    "Provider", providerSchema
    );
  
module.exports = Provider;
