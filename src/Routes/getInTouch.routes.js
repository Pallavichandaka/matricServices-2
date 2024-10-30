const getInTouchController = require("../Controllers/GetInTouch.controller");

const {Router} = require("express");
const getInTouchRouter = Router();

getInTouchRouter.get("/", getInTouchController.getData)
getInTouchRouter.get("/:id", getInTouchController.singleData)
getInTouchRouter.post("/addEvent", getInTouchController.postData)
getInTouchRouter.patch("/:id", getInTouchController.editData)
getInTouchRouter.delete("/:id", getInTouchController.deleteData)



module.exports = getInTouchRouter;