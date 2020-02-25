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
  multipleStatements: true,
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
const addSong = (title, album, artist, genre) => {
  const mysqlQuery = 'INSERT INTO song VALUES(null, ?, ?, ?, ?);';
  return query(mysqlQuery, [title, album, artist, genre]);
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

const addSongToPlaylist = (id_playlist, id_song) => {
  const mysqlQuery = 'INSERT INTO playlist_song VALUES(null, ?, ?);';
  return query(mysqlQuery, [id_playlist, id_song]);
};

const showUserPlaylist = (id_user) => {
  const mysqlQuery = 'SELECT * FROM playlist WHERE id_user = ?;';
  return query(mysqlQuery, [id_user]);
};

module.exports = {
  createUser,
  findUser,
  addSong,
  findSong,
  addPlaylist,
  showUserPlaylist,
  addSongToPlaylist,
};
