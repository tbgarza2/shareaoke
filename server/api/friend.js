/* eslint-disable camelcase */

const { Router } = require('express');
const {
  sendFriendRequest,
  acceptFriendRequest,
  removeFriend,
  showFriends,
  showSentRequests,
  showReceivedRequests,
  checkPendingRequests,
} = require('../db');

const friendRouter = Router();

// Send friend request
friendRouter.post('/request/:id_sender/:id_recepient', (req, res) => {
  const { id_sender, id_recepient } = req.params;

  sendFriendRequest(id_sender, id_recepient)
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
friendRouter.patch('/accept/:id_sender/:id_recepient', (req, res) => {
  const { id_sender, id_recepient } = req.params;

  acceptFriendRequest(id_sender, id_recepient)
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
friendRouter.delete('/remove/:id_sender/:id_recepient', (req, res) => {
  const { id_sender, id_recepient } = req.params;

  removeFriend(id_sender, id_recepient)
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
friendRouter.get('/all/:id', (req, res) => {
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

// Get a users received friend requests
friendRouter.get('/received/:id', (req, res) => {
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

// Check all requests;
friendRouter.get('/check/request/:id_sender/:id_recipient', (req, res) => {
  const { id_sender, id_recipient } = req.params;

  checkPendingRequests(id_sender, id_recipient)
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
