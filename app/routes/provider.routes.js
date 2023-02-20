const {
  postProviderInfoController,
  updateProviderParkingInfoController,
  getNearCycleInfoController,
  getAllProviderController,
  getAllTransactionController,
  getAllTransactionByProviderController,
  getAllTransactionByUserController,
  cycleSharingRequestController,
  cycleSharingAcceptRejectController,
  cycleSharingStartController,
  cycleSharingStopController,
  cycleSharingPaymentController,
  getAllTransactionByUserProviderController
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
providerRouter.get('/api/provider/transaction/get-all/:providerInfoId', getAllTransactionByProviderController);

//For getting all transactions of a user
providerRouter.get('/api/user/transaction/get-all/:userId', getAllTransactionByUserController);

//For getting all transactions of a user and as a provider
providerRouter.get('/api/user/transaction/user-provider/get-all/:userId', getAllTransactionByUserProviderController);

//Transaction route
providerRouter.get('/api/transaction/get-all', getAllTransactionController);
providerRouter.put('/api/sharing/start/:providerInfoId', cycleSharingRequestController);
providerRouter.put('/api/transaction/state-change/:transactionId', cycleSharingAcceptRejectController);
providerRouter.put('/api/transaction/start/:transactionId', cycleSharingStartController);
providerRouter.put('/api/transaction/stop/:transactionId', cycleSharingStopController);
providerRouter.put('/api/transaction/payment/:transactionId', cycleSharingPaymentController);


module.exports = {
  providerRouter,
};