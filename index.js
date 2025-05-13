const express = require('express');
const cors = require('cors');
const Connection = require('./src/Config/db');
const adminEventRouter = require('./src/Routes/adminProduct.routes');
const userRouter = require('./src/Routes/User.routes');
const cookieParser = require("cookie-parser");
const contactRouter = require('./src/Routes/ContactUs.routes');
const getInTouchRouter = require('./src/Routes/getInTouch.routes');
const campusAmbRegRouter = require('./src/Routes/campusAmbReg.routes');
const productRegisterRouter = require('./src/Routes/workShopRegister.routes');
const adminWorksShopsRouter = require('./src/Routes/adminWorkshops.routes');
const subscribeRouter = require('./src/Routes/subscribe.routes');
const workShopRegisterRouter = require('./src/Routes/workShopRegister.routes');

const app = express();

app.use(express.json());
app.use(cookieParser());

// ✅ UPDATED CORS OPTIONS
const allowedOrigins = [
  "https://www.matricservices.in",              // your production domain
  "https://matricservices.netlify.app",         // Netlify frontend domain
  "http://localhost:3000"                       // for local development
];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
  allowedHeaders: ['Content-Type'],
  credentials: true,
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

// ✅ Routes
app.use("/api/adminProduct", adminEventRouter);
app.use("/api/subscribe", subscribeRouter);
app.use("/api/adminWorkShop", adminWorksShopsRouter);
app.use("/api/admin/users", userRouter);
app.use("/api/workShopRegister", workShopRegisterRouter);
app.use("/api/contactUs", contactRouter);
app.use("/api/getInTouch", getInTouchRouter);
app.use("/api/campusAmbReg", campusAmbRegRouter);

// ✅ Start Server
app.listen(2345, async () => {
  try {
    await Connection();
    console.log("Server listening on port 2345");
  } catch (error) {
    console.log("Database connection failed:", error);
  }
});
