const express = require('express');
const apiRouter = express.Router();

const minions = require('./minions');

apiRouter.use('/minions', minions);

module.exports = apiRouter;
