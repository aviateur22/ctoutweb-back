/**
 * parametrage des cookie
 */
module.exports = ()=>{
    return ({
        secure: true,
        sameSite: 'none',
        httpOnly: true
    });
};