const templateHtml = require('./templateHtml');
const nodeMailer = require('nodemailer');
/**
 * Gestion envoie email
 */
class Mailer{
    /**
     * constructor
     * @param {Text} emailType - type d'email a envoyer
     * @param {Array} to  - tableau d'adresse d'email
     * @param {Object} data  - données de l'email
     */
    constructor(emailType, to, data){
        this.emailType = emailType;
        this.to = to;
        this.data = data;
    }

    /**
     * configuration de nodemailer
     */
    transporterConfig(){
        return (
            nodeMailer.createTransport({
                host: 'smtp.gmail.com',
                port: 465,
                secure: true,
                auth: {
                    user: process.env.EMAIL_ACCOUNT, 
                    pass: process.env.EMAIL_PASSWORD, 
                },
            })
        );
    }

    async sendEmail(){
        /** recuperation du template */
        let template = await templateHtml(this.emailType);  
        
        for( let key in this.data) 
        {
            console.log(this.data[key], key);
            template = template.replace('!%!'+ key + '!%!', this.data[key]);
        }

        /**envoie de l'email */
        await this.to.forEach(email => {
            let info = this.transporterConfig().sendMail({
                from: '"CtoutWeb 🔨" <ctoutweb@gmail.com>',
                to: email,
                subject: 'Nouvelle question ✔',
                html: template,
            });            
        });                 
    }
}
module.exports = Mailer;