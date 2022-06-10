const express = require('express');
const router = express.Router();
const apiRouter = require('./api');
const error = require('../controllers/error');
const notFound = require('../controllers/notFound');

/** router api */
router.use('/api', apiRouter);

/**path invalide */
router.use(notFound);

/** error */
router.use(error);


module.exports = router;