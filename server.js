// Express
import express from "express";
const app = express();

// Enable CORS in the development
import cors from "cors";
app.use(cors());
app.use(express.json());

// Battleship API's
import { getLobbyConfiguration, getFleetForBoard } from './src/configuration/config-functions.js';
import { db } from './src/db/db-credential.js'

// Routers 
import registerRouter from "./src/routes/registration/register.js";


// Test Route 
app.get('/test', (req, res) => {
  // Testing if database connection working
  db.select('name', 'score_to_rank').from('users').then(data => {
    console.log(data);
  })
});

// ROUTES
app.post('/register', registerRouter);


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


// Signin
app.post("/signin", (req, res) => {
  res.send('Signin not  implemented')
});

// Start server
app.listen(3001, () => {
  // Remove this in the production
  console.log("App is runninig on port 3001");
});
