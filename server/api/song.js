const { Router } = require('express');
const { addSong, findSong } = require('../db');

const songRouter = Router();

songRouter.post('/', (req, res) => {
  const {
    title,
    album,
    artist,
    genre,
  } = req.body;

  addSong(title, album, artist, genre)
    .then(() => {
      console.log('Song added to database!');
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

songRouter.get('/:title', (req, res) => {
  findSong(req.params.title)
    .then((song) => {
      res.send(song);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

module.exports = {
  songRouter,
};
