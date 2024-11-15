const {Router} = require('express')
const subscribeController = require("../Controllers/subscribe.controller");
const subscribeRouter = Router();


subscribeRouter.get("/", subscribeController.getData)
subscribeRouter.post("/addSubscription", subscribeController.postData)


module.exports =  subscribeRouter;