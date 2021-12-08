require("dotenv").config({ path: "./env/.env" });

//
const app = require("express")();
const bodyParser = require("body-parser");
const cors = require("cors");

//routes
const userRoute = require('./Routes/UsersRoute')

process.env.TZ = "Asia/Kolkata";

var corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// add routes
app.use(userRoute)



app.listen(8000, () => {
  console.log("connecte at port 8000");
});
