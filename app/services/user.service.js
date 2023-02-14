const db = require('../models');
const bcrypt = require('bcrypt');

const User = db.user;
const Instructor = db.instructor;
const Admin = db.admin;
const KnownEmail = db.known_email;

const createStudent = async (req, res) => {
  try {
    //HASHED PASSWORD
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    //GET USER DATA
    const user = new User({
      fullName: req.body.fullName,
      userName: req.body.userName,
      email: req.body.email,
      password: hashedPassword,
      phoneNumber: req.body.phoneNumber,
      NID: req.body.NID,
      Upload_academic_certificate: req.body.Upload_academic_certificate,
      profile_picture: req.body.profile_picture,
    });

    // SAVE NEW USER DATA INTO DB
    const savedUser = await user.save();
    // console.log(savedUser);
    res.status(201).send({ success: true, message: 'User Created' });
    return savedUser;
  } catch (err) {
    console.log(err);
  }
};

const updateStudentById = async (
  id,
  fullName,
  userName,
  email,
  phoneNumber,
  NID,
  Upload_academic_certificate,
  profile_picture
) => {
  try {
    //HASHED PASSWORD
    console.log('updateStudentService');
    // const hashedPassword = await bcrypt.hash(req.body.password, 10);

    //UPDATE USER DATA
    let updatedUser = await User.findOneAndUpdate(
      { _id: id },
      {
        $set: {
          fullName: fullName,
          userName: userName,
          email: email,
          phoneNumber: phoneNumber,
          NID: NID,
          Upload_academic_certificate: Upload_academic_certificate,
          profile_picture: profile_picture,
        },
      }
    );
    return updatedUser;
  } catch (err) {
    console.log(err);
  }
};

const getAllStudents = async () => {
  return await User.find({});
};

const deleteStudents = async (id) => {
  return await User.findByIdAndDelete(id);
};

const createInstructor = async (req, res, getEmail) => {
  try {
    //HASHED PASSWORD
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    //GET USER DATA
    const instructor = new Instructor({
      _id: getEmail._id,
      fullName: req.body.fullName,
      // userName: req.body.userName,
      email: req.body.email,
      password: hashedPassword,
      phoneNumber: req.body.phoneNumber,
      short_details: req.body.short_details,
      image: req.body.image,
      social_link: req.body.social_link,
    });

    // SAVE NEW USER DATA INTO DB
    const savedInstructor = await instructor.save();
    console.log(savedInstructor);
    res.status(201).send({ success: true, message: 'User Created' });
    return savedInstructor;
  } catch (err) {
    console.log(err);
  }
};

const updateInstructorById = async (
  id,
  fullName,

  phoneNumber,
  short_details,
  image,
  facebookUrl,
  youtubeUrl
) => {
  try {
    //HASHED PASSWORD
    // const hashedPassword = await bcrypt.hash(req.body.password, 10);

    //UPDATE IINSRUCTOR DATA
    let updatedInstructor = await Instructor.findOneAndUpdate(
      { _id: id },
      {
        $set: {
          fullName: fullName,
          phoneNumber: phoneNumber,
          short_details: short_details,
          image: image,
          facebookUrl,
          youtubeUrl,
        },
      }
    );
    return updatedInstructor;
  } catch (err) {
    console.log(err);
  }
};

const deleteInstructorById = async (id) => {
  return await Instructor.findByIdAndDelete(id);
};

// const createAdmin= async(req,res)=>{
//     try{
//         //HASHED PASSWORD
//         const hashedPassword =  await bcrypt.hash(req.body.password, 10);

//         //GET USER DATA
//         const admin = new Admin({
//             name: req.body.username,
//             email: req.body.email,
//             password: hashedPassword,
//         })

//         // SAVE NEW USER DATA INTO DB
//         const savedAdmin = await admin.save();
//         console.log(savedAdmin)
//         res.status(201).send({success: true, "message": "something" });
//         return savedAdmin;

//     }catch(err){
//         console.log(err);
//     }
// }

module.exports = {
  createStudent,
  createInstructor,
  updateStudentById,
  deleteStudents,
  getAllStudents,
  updateInstructorById,
  deleteInstructorById,
};
