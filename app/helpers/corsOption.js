/**Configurations des CORS */
module.exports= ()=>{
    let corsOption = {        
        credentials: true,
        methods: 'GET,PUT,PATCH,POST,DELETE'
    };
    /** Mode Développement  */
    if(process.env.NODE_ENV==='DEV'){
        console.log('en dev');
        const CORS_ORIGIN = process.env.CORS_ORIGIN;        
        corsOption.origin= CORS_ORIGIN.split(',');        
    } else /**mode PRDODUCTION */    
    {        
        console.log('en prod');
        corsOption.origin= process.env.CORS_ORIGIN.split(',');
    }
    return corsOption;
};