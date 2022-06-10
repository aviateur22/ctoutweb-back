const cookieOption = require('../helpers/cookieOption');
const csurfToken = require('../helpers/security/csurfToken');

module.exports = {

    /**
     * Récupération d'un jeton aléatoire + JWT pour soumission des données
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
    getToken:(jwtExpireIn)=>async(req, res, next)=>{
        const data = await csurfToken.generate({
            expiresIn: jwtExpireIn,
            subject: 'csurf_token'
        });

        /**données manquantes */
        if(!data.jwt || !data.token){
            throw ({
                message: '',
                statusCode: 500
            });
        }

        const jwt = data.jwt;
        const token = data.token;

        res.cookie('token_data', jwt, cookieOption);
        res.status(200).json({
            token: token
        });
    }
};