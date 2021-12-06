require("dotenv").config({ path: "./env/.env" });
//
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const cors = require("cors");

process.env.TZ = "Asia/Kolkata";

var corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



app.listen(8000, () => {
  console.log("connecte at port 8000");
});
