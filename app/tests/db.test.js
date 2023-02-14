const request = require('supertest');
const mongoose = require('mongoose');
const { dbConfig } = require('../config');
const { app, server } = require('../../server');
const { db } = require('../models');
const sum = require('./sum');
const { distanceToPriceCalculator } = require('../utils/price-calculator');
const { latlongDistanceCalculator } = require("../utils/lat-long.distance.calculator");

const dbConnect = async (db) => {
  const url = `mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`;
  console.log(url);
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Mongodb Connected');
  } catch (err) {
    console.error('Error at dbConnect ::', err);
    process.exit(1);
  }
};

beforeAll(async () => {
  dbConnect(db).catch((error) => console.error(error));
});

afterAll(async () => {
  // remove all users and close
  // await User.remove({});
  await server.close();
  await mongoose.connection.close();
});

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('lat-long calculator ', () => {
  expect(latlongDistanceCalculator(1,2,3,4)).toBe('314');
})

test('distance to price calculator 5 * 10 to equal 50', () => {
  expect(distanceToPriceCalculator(5, 10)).toBe(50);
})

test('POST- signup - api/auth/signup', async () => {
  const response = await request(app).post('/api/auth/signup').send({
    email: 'test@gmail.com',
    password: '123',
  });
  expect(response.statusCode).toBe(400);
  expect(response.body.message).toBe("User Already Exists");
});

test('POST- login - api/auth/signin', async () => {
  const response = await request(app).post('/api/auth/signin').send({
    email: 'test@gmail.com',
    password: '123',
  });
  const { success, status, data, message } = response.body;
  expect(response.statusCode).toBe(200);
});


