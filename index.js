const express = require('express');
const cors = require('cors');
const Connection = require('./src/Config/db');
const adminEventRouter = require('./src/Routes/adminProduct.routes');
const userRouter = require('./src/Routes/User.routes');
const cookieParser = require("cookie-parser");
const contactRouter = require('./src/Routes/ContactUs.routes');
const getInTouchRouter = require('./src/Routes/getInTouch.routes');
const campusAmbRegRouter = require('./src/Routes/campusAmbReg.routes');
const productRegisterRouter = require('./src/Routes/ProductRegister.routes');
const app = express();

app.use(express.json())

const corsOptions = {
    origin: "https://rotaract-chi.vercel.app", 
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    allowedHeaders: ['Content-Type'],
    credentials: true, 
    optionsSuccessStatus: 200
};

app.use(cookieParser())
app.use(cors(corsOptions)); 


app.use("/api/adminProduct", adminEventRouter)
app.use("/api/admin/users", userRouter)
app.use("/api/productRegister", productRegisterRouter)
app.use("/api/contactUs", contactRouter)
app.use("/api/getInTouch", getInTouchRouter)
app.use("/api/campusAmbReg", campusAmbRegRouter)




app.listen(2345,()=>{
    try {
        Connection()
        console.log("listening on port 2345")
    } catch (error) {
        console.log(error);
    }
})