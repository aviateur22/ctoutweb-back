const Message = require('../models').Message;
const Mailer = require('../helpers/mail/mailer');
const emailType = require('../helpers/mail/emailType');

module.exports = {
    /**
     * Mise en base de données du message
     * @param {Object} req 
     * @param {Object} res 
     * @param {Object} next 
     */
    sendMessage:async(req, res, next)=>{ 
        /** recuperation des données */
        const { email, reason, name, phone, message } = req.body;       

        await Message.create({
            reason: reason,
            email: email,
            name: name,
            phone: phone,
            message: message
        }); 

        /** initialisation email */
        const mailer = new Mailer(emailType.emailType.message,[process.env.EMAIL_ACCOUNT, email], 
            {
                reason, name, phone, message, email
            }
        );

        /** envoie d'un email */
        await mailer.sendEmail();

        return res.json({
            message: 'votre message est bien envoyé'
        });
    }
};