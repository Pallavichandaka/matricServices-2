const adminProductController = require("../Controllers/AdminProduct.controller");
const uploadHandler = require("../Middlewares/fileUploads")
const {Router} = require("express");
const adminProductRouter = Router();


adminProductRouter.get("/", adminProductController.getData)
adminProductRouter.get("/:id", adminProductController.singleData)
adminProductRouter.post("/addProduct", uploadHandler, adminProductController.postData)
adminProductRouter.patch("/:id", adminProductController.editData)
adminProductRouter.delete("/:id", adminProductController.deleteData)



module.exports = adminProductRouter;