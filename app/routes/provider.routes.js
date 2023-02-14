const {
  postProviderInfoController,
  updateProviderParkingInfoController,
  getNearCycleInfoController,
  cycleSharingStartController
} = require('../controller');
const express = require('express');

const providerRouter = express.Router();

providerRouter.post(
  '/api/provider/cycle-info/:userId', 
  postProviderInfoController,
);

providerRouter.put('/api/provider/cycle-info/:providerInfoId', updateProviderParkingInfoController);
providerRouter.put('/api/nearBy/cycle-info', getNearCycleInfoController);
providerRouter.get('/api/sharing/start/:providerInfoId', cycleSharingStartController);


module.exports = {
  providerRouter,
};