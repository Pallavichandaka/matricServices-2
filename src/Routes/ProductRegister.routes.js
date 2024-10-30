const productRegisterController = require("../Controllers/ProductRegisrer.controller");
const uploads = require("../Middlewares/fileUploads")
const {Router} = require("express");
const productRegisterRouter = Router();


productRegisterRouter.get("/", productRegisterController.getData)
productRegisterRouter.get("/:id", productRegisterController.singleData)
productRegisterRouter.post("/addEvent", uploads, productRegisterController.postData)
productRegisterRouter.patch("/:id", productRegisterController.editData)
productRegisterRouter.delete("/:id", productRegisterController.deleteData)



module.exports = productRegisterRouter;