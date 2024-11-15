const workShopRegisterController = require("../Controllers/workShopRegisrer.controller");
const uploads = require("../Middlewares/fileUploads")
const {Router} = require("express");
const workShopRegisterRouter = Router();


workShopRegisterRouter.get("/", workShopRegisterController.getData)
workShopRegisterRouter.get("/:id", workShopRegisterController.singleData)
workShopRegisterRouter.post("/addEventRegistration", uploads, workShopRegisterController.postData)
workShopRegisterRouter.patch("/:id", workShopRegisterController.editData)
workShopRegisterRouter.delete("/:id", workShopRegisterController.deleteData)



module.exports = workShopRegisterRouter;