const { Router } = require('express');
const { userRouter } = require('./user');
const { songRouter } = require('./song');
const { playlistRouter } = require('./playlist');
const { friendRouter } = require('./friend');

const apiRouter = Router();

apiRouter.use('/user', userRouter);
apiRouter.use('/song', songRouter);
apiRouter.use('/playlist', playlistRouter);
apiRouter.use('/friend', friendRouter);

module.exports.apiRouter = apiRouter;
