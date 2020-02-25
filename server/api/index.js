const { Router } = require('express');
const { userRouter } = require('./user');
const { songRouter } = require('./song');
const { playlistRouter } = require('./playlist');

const apiRouter = Router();

apiRouter.use('/user', userRouter);
apiRouter.use('/song', songRouter);
apiRouter.use('/playlist', playlistRouter);

module.exports.apiRouter = apiRouter;
