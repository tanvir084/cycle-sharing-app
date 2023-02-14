const refreshToken = require("./refreshToken");
const courseServices =require('./course.service');
const usersService=require('./user.service');
const findUsers= require('./findUsers');
const chapterService = require("./chapter.service")
const lessonService = require("./lesson.service")
const bookService = require("./book.service");
const enrollementService= require("./enrollement.service")
const sesService = require("./ses.service");
 
module.exports={
    ...refreshToken,
    ...courseServices,
    ...usersService,
    ...findUsers,
    ...chapterService,
    ...lessonService,
    ...bookService,
    ...enrollementService,
    ...sesService

}