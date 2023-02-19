const { transaction } = require('../models');
const db = require('../models');
const { latlongDistanceCalculator } = require('../utils/lat-long.distance.calculator');

const User = db.user;
const Provider = db.provider;
const Transaction = db.transaction;

const postProviderInfoController = async (req, res) => {
  const  userId  = req?.params.userId;
  const { cycleName, cycleModel, cycleNumber, parkingPlaceLat, parkingPlaceLong, perHourPrice, availability } = req?.body;
  try {
    const user = await User.findById(userId);
    if (!user)
      return res
        .status(400)
        .send({ success: false, message: 'User not found.' });

    //CREATE A NEW PROVIDER
    let provider = new Provider({
      cycleName, 
      cycleModel, 
      cycleNumber,
      user: userId,
      parkingPlaceLat,
      parkingPlaceLong,
      perHourPrice,
      availability: availability ?? true,
    });

    // SAVE NEW PROVIDER DATA INTO DB
    provider = await provider.save();
    return res.status(201).send({ success: true, message: 'Provider data Created successfully', data: provider });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ success: false, message: err });
  }
};

const updateProviderParkingInfoController = async (req, res) => {
  const  providerInfoId  = req?.params.providerInfoId;
  const { parkingPlaceLat, parkingPlaceLong, availability } = req?.body;
  try {
    const providerInfo = await Provider.findById(providerInfoId);
    if (!providerInfo)
      return res
        .status(400)
        .send({ success: false, message: 'Provider cycle info not found.' });

    const provider = await Provider.findByIdAndUpdate(
        providerInfoId, 
        {
          parkingPlaceLat: parkingPlaceLat ?? providerInfo?.parkingPlaceLat,
          parkingPlaceLong: parkingPlaceLong ?? providerInfo?.parkingPlaceLong,
          availability: availability ?? providerInfo?.availability,
        },
        { useFindAndModify : false, returnDocument: 'after' },
    );

    return res.status(201).send({ success: true, message: 'Provider data Created successfully', data: provider });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ success: false, message: err });
  }
}

const getNearCycleInfoController = async (req, res) => {
  const { userPlaceLat, userPlaceLong, distance } = req?.body;

  try {
    const providerInfo = await Provider.find({});

    const result = [];

    for(let i = 0; i < providerInfo?.length; i++){
      const difDistance = latlongDistanceCalculator(Number(userPlaceLat), Number(userPlaceLong), Number(providerInfo[i]?.parkingPlaceLat), Number(providerInfo[i]?.parkingPlaceLong));
  
      if(difDistance <= (distance ?? 100)){
        result.push(providerInfo[i]);
      }
    }

    if (!result)
      return res
        .status(400)
        .send({ success: false, message: 'Near cycle info not found.' });

      return res.status(201).send({ success: true, message: 'Near by cycle found successfully', data: result });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ success: false, message: err });
  }
}

const getAllProviderController = async (req, res) => {
  try {
    const providers = await Provider.find({});

    if (providers?.length <=0 )
      return res
        .status(400)
        .send({ success: false, message: 'Can not find provider.' });

      return res.status(201).send({ success: true, message: 'Providers found successfully', data: providers });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ success: false, message: err });
  }
}

const getAllTransactionController = async (req, res) => {
  const providerInfoId = req?.params?.providerId;
  try {
    const providerInfo = await Provider.findById(providerInfoId);
    if (!providerInfo)
      return res
        .status(400)
        .send({ success: false, message: 'Provider cycle info not found.' });

    const transactions = await Transaction.find({providerInfoId});

    if (transactions?.length <=0 )
      return res
        .status(400)
        .send({ success: false, message: 'Can not find transaction.' });

      return res.status(201).send({ success: true, message: 'Transactions found successfully', data: transactions });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ success: false, message: err });
  }
}


const cycleSharingRequestController = async (req, res) => {
  const providerInfoId = req?.params?.providerInfoId;
  try {
    const providerInfo = await Provider.findById(providerInfoId);
    if (!providerInfo)
      return res
        .status(400)
        .send({ success: false, message: 'Provider cycle info not found.' });

    //CREATE A NEW TRANSACTION
    let transaction = new Transaction({
      state: 'REQUEST',
      providerInfo: providerInfoId
    });

    // SAVE NEW PROVIDER DATA INTO DB
    transaction = await transaction.save();

    if (!transaction)
      return res
        .status(400)
        .send({ success: false, message: 'Can not create transaction.' });

      return res.status(201).send({ success: true, message: 'Transaction created successfully', data: transaction });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ success: false, message: err });
  }
}

const cycleSharingAcceptRejectController = async (req, res) => {
  const transactionId = req?.params?.transactionId;
  try {
    const transactionInfo = await Transaction.findById(transactionId);
    if (!transactionInfo)
      return res
        .status(400)
        .send({ success: false, message: 'Transaction info not found.' });

    const transaction = await Transaction.findByIdAndUpdate(
      transactionId, 
      {
        state: req?.body?.state,
      },
      { useFindAndModify : false, returnDocument: 'after' },
  );

    if (!transaction)
      return res
        .status(400)
        .send({ success: false, message: 'Can not change the state of transaction.' });

      return res.status(201).send({ success: true, message: 'Transaction state changed successfully', data: transaction });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ success: false, message: err });
  }
}

const cycleSharingStartController = async (req, res) => {
  const transactionId = req?.params?.transactionId;
  try {
    const transactionInfo = await Transaction.findById(transactionId);
    if (!transactionInfo)
      return res
        .status(400)
        .send({ success: false, message: 'Transaction info not found.' });

    const transaction = await Transaction.findByIdAndUpdate(
      transactionId, 
      {
        startTime: new Date(),
        state: 'ACTIVE'
      },
      { useFindAndModify : false, returnDocument: 'after' },
    );

    await Provider.findByIdAndUpdate(
      transactionInfo?.providerInfo,
      {
        availability: false,
      },
      { useFindAndModify : false, returnDocument: 'after' },
    )

    if (!transaction)
      return res
        .status(400)
        .send({ success: false, message: 'Can not start transaction.' });

      return res.status(201).send({ success: true, message: 'Transaction started successfully', data: transaction });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ success: false, message: err });
  }
}

const cycleSharingStopController = async (req, res) => {
  const transactionId = req?.params?.transactionId;
  try {
    const transactionInfo = await Transaction.findById(transactionId).populate('providerInfo', 'perHourPrice');
    if (!transactionInfo)
      return res
        .status(400)
        .send({ success: false, message: 'Transaction info not found.' });

    const endTime = new Date();

    var diff =(endTime.getTime() - transactionInfo?.startTime.getTime()) / 1000;
    diff /= (60 * 60);
    console.log(diff);
    diff = Math.abs(Number(diff.toFixed(2)));

    diff = diff > 0 ? diff : 1;

    const transaction = await Transaction.findByIdAndUpdate(
      transactionId,
      {
        endTime,
        duration: diff,
        state: 'COMPLETED',
        amount: Number((diff * transactionInfo?.providerInfo?.perHourPrice).toFixed(2)),
      },
      { useFindAndModify : false, returnDocument: 'after' },
    );

    await Provider.findByIdAndUpdate(
      transactionInfo?.providerInfo?._id,
      {
        availability: true,
      },
      { useFindAndModify : false, returnDocument: 'after' },
    )

    if (!transaction)
      return res
        .status(400)
        .send({ success: false, message: 'Can not stop transaction.' });

      return res.status(201).send({ success: true, message: 'Transaction completed successfully', data: transaction });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ success: false, message: err });
  }
}

module.exports = {
  postProviderInfoController,
  updateProviderParkingInfoController,
  getNearCycleInfoController,
  getAllProviderController,
  getAllTransactionController,
  cycleSharingRequestController,
  cycleSharingAcceptRejectController,
  cycleSharingStartController,
  cycleSharingStopController
};
