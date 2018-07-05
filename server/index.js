//IMPORT DEPENDENCIES
require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");
const session = require("express-session");
//INITIALIZE APP
const app = express();
const checkSessionUser = require(`${__dirname}/middlewares/checkSessionUser`);
const userCtrl = require(`${__dirname}/controllers/userCtrl`);
const port = process.env.PORT || 3000;

//MIDDLEWARES
app.use(json());
app.use(cors());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
  })
);
app.use(checkSessionUser);

//ENDPOINTS
app.post("/api/user/information", userCtrl.postInformation);

//SERVER LISTENING
app.listen(port, () => console.log("Port listening on: " + port));
