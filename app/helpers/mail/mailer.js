const templateHtml = require('./templateHtml');
const nodeMailer = require('nodemailer');
/**
 * Gestion envoie email
 */
class Mailer{
    /**
     * constructor
     * @param {*} emailType - type d'email a envoyer
     * @param {Array} to  - tableau d'adresse d'email
     */
    constructor(emailType, to){
        this.emailType = emailType;
        this.to = to;
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
        const template = await templateHtml(this.emailType);       

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