const contactUsController = require("../Controllers/ContactUs.controller");

const {Router} = require("express");
const contactRouter = Router();

contactRouter.get("/", contactUsController.getData)
contactRouter.get("/:id", contactUsController.singleData)
contactRouter.post("/addEvent", contactUsController.postData)
contactRouter.patch("/:id", contactUsController.editData)
contactRouter.delete("/:id", contactUsController.deleteData)



module.exports = contactRouter;