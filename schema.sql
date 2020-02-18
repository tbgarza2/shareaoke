/**
 * Execute this file from the command line by typing:
 *   mysql -u root < schema.sql
 */
 
DROP DATABASE IF EXISTS shareaoke;
CREATE DATABASE shareaoke;

USE shareaoke;

CREATE TABLE `user` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `username` varchar(30)
);

CREATE TABLE `friend` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `id_user` int,
  `id_friend` int
);

CREATE TABLE `playlist` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `id_user` int,
  `name` varchar(250),
  `decription` varchar(250)
);

CREATE TABLE `song` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `title` varchar(50),
  `album` varchar(50),
  `artist` varchar(50),
  `genre` varchar(50)
);

CREATE TABLE `playlist_song` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `id_playlist` int,
  `id_song` int
);

ALTER TABLE `friend` ADD FOREIGN KEY (`id_user`) REFERENCES `user` (`id`);

ALTER TABLE `friend` ADD FOREIGN KEY (`id_friend`) REFERENCES `user` (`id`);

ALTER TABLE `playlist` ADD FOREIGN KEY (`id_user`) REFERENCES `user` (`id`);

ALTER TABLE `party` ADD FOREIGN KEY (`id_playlist`) REFERENCES `playlist` (`id`);

ALTER TABLE `party` ADD FOREIGN KEY (`id_song`) REFERENCES `song` (`id`);