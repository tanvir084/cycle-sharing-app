const db = require("../models");
// const ROLES = db.ROLES;
const User = db.user;
const Instructor= db.instructor;
const Admin= db.admin;

checkDuplicateStudent = async(req, res, next) => {
    // Email
    const userEmail = await User.findOne({email: req.body.email});

    try{
      if(userEmail) {
        console.log(userEmail)
        return res.status(400).json({success: false, message: "User Already Exists" });
      }
    } 
    catch(err)
    {
      res.status(500).send({ success: false, message: err });
    }

        next();
      };

    //     if (req.body.roles) {
    //       for (let i = 0; i < req.body.roles.length; i++) {
    //         if (!ROLES.includes(req.body.roles[i])) {
    //           res.status(400).send({
    //             message: `Failed! Role ${req.body.roles[i]} does not exist!`
    //           });
    //           return;
    //         }
    //       }
    //     }
      
    //     next();
    //   };
    
    const verifySignUp = {
        checkDuplicateStudent
    };
      
    module.exports = verifySignUp;
  