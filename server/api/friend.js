/* eslint-disable camelcase */

const { Router } = require('express');
const {
  sendFriendRequest,
  acceptFriendRequest,
  removeFriend,
  showFriends,
  showPendingRequests,
  showReceivedRequests,
} = require('../db');

const friendRouter = Router();

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

friendRouter.get('/:id', (req, res) => {
  const { id } = req.params;

  showFriends(id)
    .then((friends) => {
      res.send(friends.map(friend => friend.username));
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

friendRouter.get('/sent/:id', (req, res) => {
  const { id } = req.params;

  showPendingRequests(id)
    .then((friends) => {
      res.send(friends.map(friend => friend.username));
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

friendRouter.get('/recieved/:id', (req, res) => {
  const { id } = req.params;

  showReceivedRequests(id)
    .then((friends) => {
      res.send(friends.map(friend => friend.username));
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

module.exports = {
  friendRouter,
};
