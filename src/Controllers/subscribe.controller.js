

const { sendMail } = require("../Config/mail");
const subscribeModel = require("../Models/subscribe.model")

const subscribeController = {
    getData: async (req, res) => {
      try {
        const data = await subscribeModel.find();
        return res.status(200).send({ message: "success", data });
      } catch (error) {
        console.error("Error fetching data:", error);
        return res.status(500).send({ message: "Error fetching data" });
      }
    },
  
    postData: async (req, res) => {
      try {
        const data = await subscribeModel.create(req.body);
  
        const subMail = req.body.subEmail; 
        console.log("Subscriber email:", subMail);
  
       
        
        return res.status(200).send({ message: "Created successfully", data });
      } catch (error) {
        console.error("Error in postData:", error);
        return res.status(500).send({ message: "Error creating subscription" });
      }
    },
  };
  
  module.exports = subscribeController;
  