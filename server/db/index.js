/* eslint-disable camelcase */

const mysql = require('mysql');
const util = require('util');

const DB_HOST = 'localhost';
const DB_USER = 'root';
const DB_PASS = '';
const DB_NAME = 'shareaoke';

const connection = mysql.createConnection({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASS,
  database: DB_NAME,
});

const query = util.promisify(connection.query).bind(connection);

connection.connect(err => {
  if (err) {
    console.log(err);
  } else {
    console.log('Database connected!');
  }
});

// users
const createUser = (username) => {
  const mysqlQuery = 'INSERT INTO user VALUES(null, ?);';
  return query(mysqlQuery, [username]);
};

const findUser = (username) => {
  const mysqlQuery = 'SELECT * FROM user WHERE username = ?;';
  return query(mysqlQuery, [username]);
};

// songs
const addSong = (title, album, artist, imageURL, uri) => {
  const mysqlQuery = 'INSERT INTO song VALUES(null, ?, ?, ?, ?, ?);';
  return query(mysqlQuery, [title, album, artist, imageURL, uri]);
};

const findSong = (title) => {
  const mysqlQuery = 'SELECT * FROM song WHERE title = ?;';
  return query(mysqlQuery, [title]);
};

// playlists
const addPlaylist = (id_user, name, description) => {
  const mysqlQuery = 'INSERT INTO playlist VALUES(null, ?, ?, ?);';
  return query(mysqlQuery, [id_user, name, description]);
};

const deletePlaylist = (id) => {
  const mysqlQuery1 = 'DELETE FROM playlist_song WHERE id_playlist = ?;';
  const mysqlQuery2 = 'DELETE FROM playlist WHERE id = ?;';
  return query(mysqlQuery1, [id])
    .then(() => {
      query(mysqlQuery2, [id]);
    });
};

const addSongToPlaylist = (id_playlist, id_song) => {
  const mysqlQuery = 'INSERT INTO playlist_song VALUES(null, ?, ?);';
  return query(mysqlQuery, [id_playlist, id_song]);
};

const removeSongFromPlaylist = (id_playlist, id_song) => {
  const mysqlQuery = 'DELETE FROM playlist_song WHERE id_playlist = ? AND id_song = ?;';
  return query(mysqlQuery, [id_playlist, id_song]);
};

const showUserPlaylist = (id_user) => {
  const mysqlQuery = 'SELECT * FROM playlist WHERE id_user = ?;';
  return query(mysqlQuery, [id_user]);
};

const showPlaylistSongs = (id_playlist) => {
  const mysqlQuery = `
    SELECT song.id, song.title, song.album, song.artist, song.imageURL, song.uri
    FROM playlist_song
    INNER JOIN song
    ON song.id = playlist_song.id_song
    WHERE playlist_song.id_playlist = ?;`;
  return query(mysqlQuery, [id_playlist]);
};

// friends
const sendFriendRequest = (id_sender, id_recepient) => {
  const mysqlQuery = 'INSERT INTO friend VALUES(null, ?, ?, ?);';
  return query(mysqlQuery, [id_sender, id_recepient, 0]);
};

const acceptFriendRequest = (id_sender, id_recepient) => {
  const mysqlQuery = 'UPDATE friend SET status = 1 WHERE id_sender = ? AND id_recepient = ?;';
  return query(mysqlQuery, [id_sender, id_recepient]);
};

// Used for both declining and removing friends
const removeFriend = (id_sender, id_recepient) => {
  const mysqlQuery = 'DELETE FROM friend WHERE id_sender = ? AND id_recepient = ?;';
  return query(mysqlQuery, [id_sender, id_recepient]);
};

const showFriends = (id) => {
  const mysqlQuery = `
    SELECT user.username
    FROM friend
    INNER JOIN user
    ON user.id = friend.id_recepient
    WHERE friend.id_sender = ?
    AND status = 1
    UNION
    SELECT user.username
    FROM friend
    INNER JOIN user
    ON user.id = friend.id_sender
    WHERE friend.id_recepient = ?
    AND status = 1;`;
  return query(mysqlQuery, [id, id]);
};

const showSentRequests = (id) => {
  const mysqlQuery = `
    SELECT user.username
    FROM friend
    INNER JOIN user
    ON user.id = friend.id_recepient
    WHERE friend.id_sender = ?
    AND status = 0`;
  return query(mysqlQuery, [id, id]);
};

const showReceivedRequests = (id) => {
  const mysqlQuery = `
    SELECT user.username
    FROM friend
    INNER JOIN user
    ON user.id = friend.id_sender
    WHERE friend.id_recepient = ?
    AND status = 0`;
  return query(mysqlQuery, [id, id]);
};

module.exports = {
  // users
  createUser,
  findUser,
  // songs
  addSong,
  findSong,
  // playlists
  addPlaylist,
  deletePlaylist,
  addSongToPlaylist,
  removeSongFromPlaylist,
  showUserPlaylist,
  showPlaylistSongs,
  // friends
  sendFriendRequest,
  acceptFriendRequest,
  removeFriend,
  showFriends,
  showSentRequests,
  showReceivedRequests,
};
