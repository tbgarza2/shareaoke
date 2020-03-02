const { Router } = require('express');
const { userRouter } = require('./user');
const { songRouter } = require('./song');
const { playlistRouter } = require('./playlist');
const { friendRouter } = require('./friend');
const { lyricsRouter } = require('./lyrics');

const apiRouter = Router();

apiRouter.use('/user', userRouter);
apiRouter.use('/song', songRouter);
apiRouter.use('/playlist', playlistRouter);
apiRouter.use('/friend', friendRouter);
apiRouter.use('/lyrics', lyricsRouter);

module.exports.apiRouter = apiRouter;
