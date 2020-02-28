/**
 * Execute this file from the command line by typing:
 *   mysql -u root < schema.sql
 */
 
DROP DATABASE IF EXISTS shareaoke;
CREATE DATABASE shareaoke;

USE shareaoke;

CREATE TABLE `user` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `username` varchar(30) NOT NULL UNIQUE
);

CREATE TABLE `friend` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `id_sender` int NOT NULL,
  `id_recepient` int NOT NULL,
  `status` int
);

CREATE TABLE `playlist` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `id_user` int NOT NULL,
  `name` varchar(250) NOT NULL,
  `description` varchar(250)
);

CREATE TABLE `song` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `title` varchar(50) NOT NULL UNIQUE,
  `album` varchar(50),
  `artist` varchar(50) NOT NULL,
  `imageURL` varchar(250),
  `uri` varchar(50)
);

CREATE TABLE `playlist_song` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `id_playlist` int NOT NULL,
  `id_song` int NOT NULL
);

ALTER TABLE `friend` ADD FOREIGN KEY (`id_sender`) REFERENCES `user` (`id`);

ALTER TABLE `friend` ADD FOREIGN KEY (`id_recepient`) REFERENCES `user` (`id`);

CREATE UNIQUE INDEX `user_friend` ON `friend`(`id_sender`,`id_recepient`);

ALTER TABLE `playlist` ADD FOREIGN KEY (`id_user`) REFERENCES `user` (`id`);

ALTER TABLE `playlist_song` ADD FOREIGN KEY (`id_playlist`) REFERENCES `playlist` (`id`);

CREATE UNIQUE INDEX `plst_sng` ON `playlist_song`(`id_playlist`,`id_song`);

ALTER TABLE `playlist_song` ADD FOREIGN KEY (`id_song`) REFERENCES `song` (`id`);