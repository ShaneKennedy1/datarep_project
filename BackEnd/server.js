const express = require('express'); 
const app = express(); 
const port = 4000;

const cors = require('cors'); 
app.use(cors()); 

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); 
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS"); 
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next(); 
});

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json()); 

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://g00393988:admin@yours.hfgz6.mongodb.net/');
 
const gameSchema = new mongoose.Schema({
  name: String, 
  release: String,  
  cover: String,
  developer: String,
  score: String,

});

const gameModel = mongoose.model('myGames', gameSchema);

app.post('/api/games', async (req, res) => {
    console.log("Game added: " + req.body.name); 
    const { name, release, cover, developer, score } = req.body; 
    const newGame = new gameModel({ name, release, cover, developer, score });
    newGame.save(); 
    res.send("Game Added!"); 
});

app.get('/api/games', async (req, res) => {
  const games = await gameModel.find({}); 
  res.json(games); 
});

app.get('/api/game/:id', async (req, res) => {
  let game = await gameModel.findById({ _id: req.params.id });
  res.send(game);
});

app.put('/api/game/:id', async (req, res) => {
  let game = await gameModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(game);
});

app.delete('/api/game/:id', async (req, res) => {
  console.log('Deleting game with ID:', req.params.id);
  const game = await gameModel.findByIdAndDelete(req.params.id);
  res.status(200).send({ message: "Game deleted successfully", game });
});

app.get('/api/game/:id', async (req, res) => {
  const game = await gameModel.findById(req.params.id); 
  res.send(game); 
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`); 
});
