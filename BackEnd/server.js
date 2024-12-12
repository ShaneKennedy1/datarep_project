const express = require('express'); 
const app = express(); 
const port = 4000;

// Enable Cross-Origin Resource Sharing (CORS)
const cors = require('cors'); 
app.use(cors()); 

// Set up headers for allowing cross-origin requests
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); 
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS"); 
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next(); 
});

// Set up body parser to handle incoming requests
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json()); 

// Connect to MongoDB using mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://g00393988:admin@yours.hfgz6.mongodb.net/');

// Define the schema for the game data
const gameSchema = new mongoose.Schema({
  name: String, 
  release: String,  
  cover: String,
  developer: String,
  score: String,
});

// Create a model for the 'myGames' collection based on the schema
const gameModel = mongoose.model('myGames', gameSchema);

// Route to add a new game
app.post('/api/games', async (req, res) => {
    console.log("Game added: " + req.body.name); 
    const { name, release, cover, developer, score } = req.body; 
    const newGame = new gameModel({ name, release, cover, developer, score });
    newGame.save(); 
    res.send("Game Added!"); 
});

// Route to get all games from the database
app.get('/api/games', async (req, res) => {
  const games = await gameModel.find({}); 
  res.json(games); 
});

// Route to get a specific game by its ID
app.get('/api/game/:id', async (req, res) => {
  let game = await gameModel.findById({ _id: req.params.id });
  res.send(game);
});

// Route to update a game by its ID
app.put('/api/game/:id', async (req, res) => {
  let game = await gameModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(game);
});

// Route to delete a game by its ID
app.delete('/api/game/:id', async (req, res) => {
  console.log('Deleting game with ID:', req.params.id);
  const game = await gameModel.findByIdAndDelete(req.params.id);
  res.status(200).send({ message: "Game deleted successfully", game });
});

// Start the server and listen for incoming requests
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`); 
});
