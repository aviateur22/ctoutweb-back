const express = require('express');
const router = express.Router();
const controllerHandler = require('../../helpers/controllerHandler');
const tokenController = require('../../controllers').tokenController;

/** duréée de vie d'un JWT */
const jwtExpireIn = require('../../helpers/jwtExpireIn');

/** génération d'un csurf-token pour envoyer un mesage (page d'accueil) */
router.get('/messaging',
    controllerHandler(tokenController.getToken(jwtExpireIn.messaging)));

module.exports = router;