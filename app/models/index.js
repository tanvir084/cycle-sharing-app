const mongoose = require('mongoose');

// mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require('./user.model');
db.provider = require('./provider.model');
db.transaction = require('./transaction.model');

module.exports = db;
