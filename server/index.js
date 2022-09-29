const express = require("express");
const mongoose = require("mongoose");
const DetailsRouter = require("./routers/Details");
const cors = require("cors");
require("dotenv").config();

const app = express();



const port = process.env.PORT ;

mongoose.connect(

`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@aplication.xx4nr.mongodb.net/?retryWrites=true&w=majority`
);
console.log(mongoose.connection.readyState)
app.use(express.json());
app.use(cors());
app.use(DetailsRouter);





app.listen(port, () => {
  console.log("Server is up on port " + port);
});