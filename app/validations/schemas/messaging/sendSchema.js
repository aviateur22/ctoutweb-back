const Joi = require('joi');
module.exports = Joi.object({
    /**raison */
    reason:Joi.string()
        .pattern(/^[^ ][a-zA-Z0-9\d*\séè¨çàùê,;'"]+[^ ]$/)
        .required()
        .messages({
            'string.empty': 'la raison du message ne peut pas être vide',
            'string.pattern.base': 'la raison du message n\'est pas valide',
            'any.required': 'la raison du message ne peut pas être vide'
        }),

    /**email*/    
    email:Joi.string()
        .pattern(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/)
        .required()
        .messages({
            'string.empty': 'l\'email est obligatoire',
            'string.pattern.base': 'erreur dans le format de l\'email',
            'any.required': 'l\'email est obligatoire'
        }),
    
    /**nom ou société */
    name: Joi
        .string()
        .required()
        .pattern(/^[^ ][a-zA-Z0-9\séè¨çàùê,;'"]+[^ ]$/)
        .messages({
            'string.pattern.base': 'le format de  votre nom n\'est pas correct',
            'any.required': 'votre nom est obligatoire',
            'string.empty': 'votre nom est obligatoire'
        }),

    /**téléphone */
    phone: Joi
        .string()
        .min(10)
        .max(14)
        .required()
        .pattern(/^[^ ][0-9\s]+[^ ]$/)
        .messages({
            'string.pattern.base': 'respecter le format du numéro de téléphone: 06 06 06 06 06',
            'any.required': 'le numéro de téléphone est obligatoire',
            'string.empty': 'le numéro de téléphone est obligatoire',
            'string.max': 'respecter le format du numéro de téléphone: 06 06 06 06 06',
            'string.min': 'respecter le format du numéro de téléphone: 06 06 06 06 06',
        }),

    /**token aléatoire*/
    token: Joi
        .string()
        .required()
        .messages({
            'string.empty': 'token',
            'any.required': 'token'  
        }),
});