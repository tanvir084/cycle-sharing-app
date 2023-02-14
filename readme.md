### User Model

    name: String,
    email: String,
    password: String,
    profile_picture: String,
    passwordResetCode: String
    role: enum

### Provider Model

    cyclleName: String,
    cycleModel: String,
    cycleNumber: String,
    user: userId,
    parkingPlaceLat: Number, 
    parkingPlaceLong: Number,
    perHourPrice: Number,
    availability: Boolean,

### Transaction Model

    startTime: Date,
    endTime: Date,
    providerInfo: providerId,
    amount: Number,
    duration: Number,
    paid: Boolean

