/* eslint-disable camelcase */

const { Router } = require('express');
const {
  sendFriendRequest,
  acceptFriendRequest,
  removeFriend,
  showFriends,
  showSentRequests,
  showReceivedRequests,
} = require('../db');

const friendRouter = Router();

// Send friend request
friendRouter.post('/request/:id_user/:id_friend', (req, res) => {
  const { id_user, id_friend } = req.params;

  sendFriendRequest(id_user, id_friend)
    .then(() => {
      console.log('Friend request sent!');
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

// Accept a friend request
friendRouter.patch('/accept/:id_user/:id_friend', (req, res) => {
  const { id_user, id_friend } = req.params;

  acceptFriendRequest(id_user, id_friend)
    .then(() => {
      console.log('Friend request accepted!');
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

// Decline a friend request/remove a friend
friendRouter.delete('/remove/:id_user/:id_friend', (req, res) => {
  const { id_user, id_friend } = req.params;

  removeFriend(id_user, id_friend)
    .then(() => {
      console.log('Friend removed!');
      res.sendStatus(204);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

// Get a users friends
friendRouter.get('/:id', (req, res) => {
  const { id } = req.params;

  showFriends(id)
    .then((friends) => {
      res.send(friends);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

// Get a users sent friend requests
friendRouter.get('/sent/:id', (req, res) => {
  const { id } = req.params;

  showSentRequests(id)
    .then((friends) => {
      res.send(friends);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

// Get a users recieved friend requests
friendRouter.get('/recieved/:id', (req, res) => {
  const { id } = req.params;

  showReceivedRequests(id)
    .then((friends) => {
      res.send(friends);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

module.exports = {
  friendRouter,
};
