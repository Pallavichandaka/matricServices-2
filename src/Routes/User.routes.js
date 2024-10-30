const userController = require("../Controllers/User.controller");
const {Router} = require("express");
const userRouter = Router();

userRouter.get("/", userController.getUser)
userRouter.post("/register", userController.register);
userRouter.post("/login", userController.login);



module.exports = userRouter