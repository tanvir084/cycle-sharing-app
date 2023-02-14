const express = require('express');
const cors = require('cors');
const dbConfig = require('./app/config/db.config');
const { addHeader } = require('./app/middlewares');
const db = require('./app/models');
const {
  authRouter,
  providerRouter
} = require('./app/routes');

const User = require('./app/models/user.model');
// const Role = require('./app/models/role.model');
const app = express();

var corsOptions = {
  origin: '*',
};
app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

//
const dbConnect = async (db) => {
  const url = `mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`;
  console.log(url);
  try {
    await db.mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Mongodb Connected');
  } catch (err) {
    console.error('Error at dbConnect ::', err);
    process.exit(1);
  }
};

dbConnect(db).catch((error) => console.error(error));

app.use(function (req, res, next) {
  addHeader;
  next();
});
app.use(authRouter);
app.use(providerRouter);


app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Application' });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;

var server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

module.exports = {
  app,
  server,
};
