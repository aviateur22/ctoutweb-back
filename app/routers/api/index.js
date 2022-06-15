const express = require('express');
const router = express.Router();
const messaging = require('./messaging');
const token = require('./token');

/** router messagerie */
router.use('/messaging', messaging);

/** router  token*/
router.use('/token', token);

module.exports = router;