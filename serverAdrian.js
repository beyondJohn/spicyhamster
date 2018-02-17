// Get dependencies
const express = require('express');
const app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
const path = require('path');

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

//SpicyHamster
app.get('/home.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'home.html'));
});

//SpicyHamster
app.get('/games.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'games.html'));
});

//SpicyHamster
app.get('/funplaces.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'Funplaces.html'));
});

//SpicyHamster
app.get('/restaurants.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'Restaurants.html'));
});

//SpicyHamster
app.get('/polarbears.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'polarbears.html'));
});

//And GET another
app.get('/ball', (req, res) => {
  res.sendFile(path.join(__dirname, 'ball.html'));
});

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'home.html'));
});

io.on('connection', function(socket){
  console.log('connection made');
  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
    io.emit('chat message',msg);
  });
});

http.listen(3900, function(){
  console.log('listening on *:3000');
});