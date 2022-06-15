const express = require('express');
const router = express.Router();
const multer = require('multer')();
/**wrapper de controller */
const controllerHandler = require('../../helpers/controllerHandler');

/**middleware */
const cookieMiddleware = require('../../middlewares/cookie');
const checkTokenMiddleware = require('../../middlewares/checkToken');
const sanitizeMiddleware = require('../../middlewares/sanitize');

/**validation données */
const joiValidation = require('../../validations');
const messagingSchema = require('../../validations/schemas/messaging');

/** controller */
const messagingController = require('../../controllers').messagingController;

/** router api */
router.post('/', 
    multer.none(),
    controllerHandler(cookieMiddleware),
    controllerHandler(checkTokenMiddleware),    
    joiValidation(messagingSchema.sendSchema),
    controllerHandler(sanitizeMiddleware),
    controllerHandler(messagingController.sendMessage));

module.exports = router;