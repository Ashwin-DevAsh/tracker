const app = require("express").Router();

const initiativeController = new (require("../Controllers/InitiativeController"))();
const authService = new (require("../Services/AuthService"))();


app.post("/v1/createInitiative",authService.isSessionAlive,initiativeController.createInitiative);


module.exports = app;
