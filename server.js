import express from "express";
import cors from "cors";

import {getLobbyConfiguration, getFleetForBoard} from './src/configuration/config-functions.js';

// const bcrypt = require("bcrypt");
// const validate = require("validate");

const app = express();

// Enable CORS in the development
app.use(cors());

// ROUTES ________________________________

// Main Page (Website part of the app)
app.get("/", (req, res) => {
  res.send("Battleship");
});

// Splash screen
app.get("/splash/players-count", (req, res) => {
  res.send('Players count not implemented')
});

// Main menu Routs -------------------------

// Get the ranking 
app.get("/main-menu/ranking/:type/:count", (req, res) => {
  res.send('Rankings not implemented')
});

// Player settings
app.get("/profile/settings/:id", (req, res) => {
  res.send('Settings not implemented')
});

// Settup/Lobby Routs ------------------------

// Get the posible game configurations
app.get("/lobby/configuration", (req, res) => {
  const configString = getLobbyConfiguration();
  res.json(configString)
});

// Get posible fleet arrangement for given board size
app.get("/lobby/configuration/:boardType", (req, res) => {
  const configString = getFleetForBoard(req.params.boardType);
  console.log(getFleetForBoard('boardSizeSmall-5x5'));
  res.json(configString)
});

// POST Start game
app.post("/lobby/start-game", (req, res) => {
  
  res.send('Start game not implemented')
});

// Registartion
app.post("/register", (req, res) => {
  res.send('Registartion not  implemented')
});

// Signin
app.post("/signin", (req, res) => {
  res.send('Signin not  implemented')
});



// Start server
app.listen(3001, () => {
  // Remove this in the production
  console.log("App is runninig on port 3001");
});


// Middleware function example
// const middleware = (req, res, next) => {
//   console.log(`middleware run`);
//   next();
// };