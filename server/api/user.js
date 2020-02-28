const { Router } = require('express');
const { findUser, createUser } = require('../db');

const userRouter = Router();

userRouter.post('/:name', (req, res) => {
  createUser(req.params.name)
    .then((user) => {
      console.log('Account created!');
      res.send(201, user.insertId);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

userRouter.get('/:name', (req, res) => {
  findUser(req.params.name)
    .then((user) => {
      res.send(user);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

module.exports = {
  userRouter,
};
