
  

// require("dotenv").config()

// const nodemailer = require('nodemailer');


// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: "cyclerestorein@gmail.com",
//     pass: "fmubmunhwjemavrk"
//   },
// });




// module.exports = transporter;


require("dotenv").config();
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "cyclerestorein@gmail.com",
    pass: "fmubmunhwjemavrk"
  },
});

transporter.verify((error, success) => {
  if (error) {
    console.error("Transporter setup failed:", error);
  } else {
    console.log("Transporter is ready to send emails:", success);
  }
});

module.exports = transporter;

