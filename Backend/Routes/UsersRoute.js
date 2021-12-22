const app = require("express").Router();

const userController = new (require("../Controllers/UsersController"))();

app.post("/v1/login",userController.login);
app.post("/v1/signup",userController.signup);
app.post("/v1/getOtp",userController.getOtp);
app.post("/v1/isSessionAlive",userController.isSessionAlive);
app.get("/v1/getUser",userController.getUser);


module.exports = app;
