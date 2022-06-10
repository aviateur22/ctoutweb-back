const fileReader = require('../fileReader');

/**
 * gestion des template d'email
 */
module.exports =  async(emailType)=>{
    let template; 

    switch (emailType){
    /** message  */
    case 'message': 
        template = await fileReader('app/statics/templateHtml/message.html');
        return template;

    /** devis */
    case 'quotation':
        template = await fileReader('app/statics/templateHtml/quotation.html');
        return template;

    /** rendez-vous */
    case 'appointment':
        template = await fileReader('app/statics/templateHtml/appointment.html');
        return template;
        
    default:
        throw ({
            message: 'impossible de procéder à l\'envoie de l\'email',
            statusCode: 400
        });
    }
};