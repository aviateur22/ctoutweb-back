/**
 * Affichage message dans la console
 * @param {Object} data 
 * @property {text} data.fileLocalisation - fichier source
 * @property {text} data.message - message
 */
module.exports = (data)=>{
    if(process.env.NODE_ENV === 'DEV'){
        console.log(
            `fichier source du message: ${data.fileLocalisation}`, 
            '\n',
            data.message
        );
    }
};