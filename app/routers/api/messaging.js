const express = require('express');
const router = express.Router();
const multer = require('multer')();
/**wrapper de controller */
const controllerHandler = require('../../helpers/controllerHandler');

/**middleware */
const cookieMiddleware = require('../../middlewares/cookie');
const verifyTokenMiddleware = require('../../middlewares/verifyToken');
const sanitizeMiddleware = require('../../middlewares/sanitize');

/**validation données */
const joiValidation = require('../../validations');
const messagingSchema = require('../../validations/schemas/messaging');

/** controller */
const messagingController = require('../../controllers').messagingController;

/** router api */
router.post('/', 
    // controllerHandler(cookieMiddleware),
    // controllerHandler(verifyTokenMiddleware),
    multer.none(),
    joiValidation(messagingSchema.sendSchema),
    controllerHandler(sanitizeMiddleware),
    controllerHandler(messagingController.sendMessage));

module.exports = router;