const app = require("express").Router();

const initiativeController = new (require("../Controllers/InitiativeController"))();
const authService = new (require("../Services/AuthService"))();


app.post("/v1/createInitiative",authService.isSessionAlive,initiativeController.createInitiative);
app.get("/v1/getAllInitiative",authService.isSessionAlive,initiativeController.getAllInitiative);



module.exports = app;
