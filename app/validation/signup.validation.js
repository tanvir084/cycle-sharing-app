const Joi= require('@hapi/joi');

//SIGN-UP VALIDATION

const signupValidation = (data) =>{
    const schema= Joi.object({
        fullName: Joi.string().min(6).required(),
        userName: Joi.string().required(),
        email: Joi.string().min(6).required().email(),
        password: Joi.string().required(),
        phoneNumber: Joi.string().min(11).required()
    });

    return schema.validate(data);
};

module.exports={signupValidation}
