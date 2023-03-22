import express from "express";
import cors from "cors";
import { body } from 'express-validator';
// const bcrypt = require("bcrypt");

import {getLobbyConfiguration, getFleetForBoard} from './src/configuration/config-functions.js';
import { db } from './src/db/db-credential.js'



// Validators

// isAlphanumeric(str [, locale, options]) //numberW & letters
// isBoolean(str [, options]) 
// isEmail(str [, options])
// isEmpty(str [, options])
// isFloat(str [, options])
// isHash(str, algorithm)
// isInt(str [, options])
// isNumeric(str [, options])
// isStrongPassword(str [, options])

// Sanitizers 
// escape(input) //replace <, >, &, ', " and / with HTML entities.
// normalizeEmail(email [, options])

// toBoolean(input [, strict]) 
// convert the input string to a boolean. Everything except for '0', 'false' and '' returns true. 
//  In strict mode only '1' and 'true' return true.


const app = express();

// Enable CORS in the development
app.use(cors());

// ROUTES ________________________________

// Test Route 
app.get('/test', (req,  res) => {
  // Testing if database connection working
  db.select('name', 'score_to_rank').from('users').then(data => {
    console.log(data);
  })
});

// Main Page (Website part of the app)
app.get("/", (req, res) => {
  res.send("Welcome to Battleship!");
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

// Start server _________________________________
app.listen(3002, () => {
  // Remove this in the production
  console.log("App is runninig on port 3002");
});
