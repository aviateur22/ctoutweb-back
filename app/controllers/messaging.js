module.exports = {

    /**
     * Mise en base de données du message
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
    sendMessage:async(req, res, next)=>{
        return res.json({
            message: 'ok'
        });
    },

    /**
     * Envoie une copie du message par mail à ctoutweb et au client
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
    sendEmail:async(req, res, next)=>{

    }
};