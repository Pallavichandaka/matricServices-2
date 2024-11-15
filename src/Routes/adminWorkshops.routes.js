const adminWorkShopsController = require("../Controllers/AdminWorkshops.controller");
const uploadHandler = require("../Middlewares/fileUploads")
const {Router} = require("express");
const adminWorksShopsRouter = Router();


adminWorksShopsRouter.get("/", adminWorkShopsController.getData)
adminWorksShopsRouter.get("/:id", adminWorkShopsController.singleData)
adminWorksShopsRouter.post("/addWorkShop", uploadHandler, adminWorkShopsController.postData)
adminWorksShopsRouter.patch("/:id", adminWorkShopsController.editData)
adminWorksShopsRouter.delete("/:id", adminWorkShopsController.deleteData)



module.exports = adminWorksShopsRouter;