require("dotenv").config({ path: "./env/.env" });

//
const app = require("express")();
const bodyParser = require("body-parser");
const cors = require("cors");

//routes
const userRoute = require('./Routes/UsersRoute')
const initiativeRoute = require('./Routes/InitiativeRoute')


process.env.TZ = "Asia/Kolkata";


app.use(cors({
  origin: "*",
  optionsSuccessStatus: 200,
  credentials:true,
  allowedHeaders:"*"
}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// add routes
app.use(userRoute)
app.use(initiativeRoute)




app.listen(8000, () => {
  console.log("connecte at port 8000");
});
