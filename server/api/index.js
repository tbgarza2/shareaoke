const { Router } = require('express');
const { userRouter } = require('./user');
const { songRouter } = require('./song');

const apiRouter = Router();

apiRouter.use('/user', userRouter);
apiRouter.use('/song', songRouter);

module.exports.apiRouter = apiRouter;
