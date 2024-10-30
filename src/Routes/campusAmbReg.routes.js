const campusAmbRegController = require("../Controllers/CampusAmbReg.controller");

const {Router} = require("express");
const campusAmbRegRouter = Router();

campusAmbRegRouter.get("/", campusAmbRegController.getData)
campusAmbRegRouter.get("/:id", campusAmbRegController.singleData)
campusAmbRegRouter.post("/addEvent", campusAmbRegController.postData)
campusAmbRegRouter.patch("/:id", campusAmbRegController.editData)
campusAmbRegRouter.delete("/:id", campusAmbRegController.deleteData)



module.exports = campusAmbRegRouter;