const {
  postProviderInfoController,
  updateProviderParkingInfoController,
  getNearCycleInfoController,
  getAllProviderController,
  getAllTransactionController,
  cycleSharingRequestController,
  cycleSharingAcceptRejectController,
  cycleSharingStartController,
  cycleSharingStopController
} = require('../controller');
const express = require('express');

const providerRouter = express.Router();

providerRouter.post(
  '/api/provider/cycle-info/:userId', 
  postProviderInfoController,
);

providerRouter.put('/api/provider/cycle-info/:providerInfoId', updateProviderParkingInfoController);
providerRouter.put('/api/nearBy/cycle-info', getNearCycleInfoController);
providerRouter.get('/api/provider/get-all', getAllProviderController);

//Transaction route
providerRouter.get('/api/transaction/get-all', getAllTransactionController);
providerRouter.get('/api/sharing/start/:providerInfoId', cycleSharingRequestController);
providerRouter.put('/api/transaction/state-change/:transactionId', cycleSharingAcceptRejectController);
providerRouter.put('/api/transaction/start/:transactionId', cycleSharingStartController);
providerRouter.put('/api/transaction/stop/:transactionId', cycleSharingStopController);


module.exports = {
  providerRouter,
};