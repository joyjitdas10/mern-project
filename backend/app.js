const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
require("dotenv").config();

// middleware
const corsOptions = {
    origin: "http://localhost:3000" // frontend URI (ReactJS)
}
app.use(express.json());
app.use(cors(corsOptions));

// connect MongoDB
// mongoose.connect(process.env.MONGODB_URI).then(() => {
    const PORT = process.env.PORT || 8000

    // if(process.env.NODE_ENV === "production"){
    //     app.use(express.static("client/build"));
    //     const path = require("path");
    //     app.get("*",(req,res)=>{
    //         res.sendFile(path.resolve(__dirname,'client','build','index.html'));
    //     }) 
    // }
    app.listen(PORT, () => {
        console.log(`App is Listening on PORT ${PORT}`);
    })
// }).catch(err => {
//     console.log(err);
// });

// route
app.get("/", (req, res) => {
    res.status(201).json({message: "Connected to Backend!"});
});