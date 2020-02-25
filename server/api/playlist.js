/* eslint-disable camelcase */

const { Router } = require('express');
const { addPlaylist, addSongToPlaylist, showUserPlaylist } = require('../db');

const playlistRouter = Router();

// Add playlist
playlistRouter.post('/', (req, res) => {
  const {
    id_user,
    name,
    description,
  } = req.body;

  console.log(req.body);

  addPlaylist(id_user, name, description)
    .then(() => {
      console.log('Playlist added to database!');
      res.status(201).send('Playlist created successfully!');
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

// Add song to playlist
playlistRouter.post('/:id_playlist/:id_song', (req, res) => {
  const { id_playlist, id_song } = req.params;

  addSongToPlaylist(id_playlist, id_song)
    .then(() => {
      console.log('Song successfully added to playlist!');
      res.status(201).send('Song successfully added to playlist!');
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

// Show a users playlist
playlistRouter.get('/:userId', (req, res) => {
  showUserPlaylist(req.params.userId)
    .then((playlists) => {
      res.send(playlists);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

module.exports = {
  playlistRouter,
};
