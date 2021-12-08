const app = require("express").Router();

const userController = new (require("../Controllers/UsersController"))();

app.post("/v1/login",userController.login);
app.post("/v1/signup",userController.signup);
app.post("/v1/getOtp",userController.getOtp);


module.exports = app;
