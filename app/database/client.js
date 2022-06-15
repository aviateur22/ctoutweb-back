const { Sequelize } = require('sequelize');
let sequelize;

/** connection en production */
if(process.env.NODE_ENV === 'production'){
    sequelize = new Sequelize(
        process.env.PGDATABASE,
        process.env.PGUSER,
        process.env.PGPASSWORD,
        {
            host: 'db',
            dialect: 'postgres',
            logging: false,
            define:{
                underscored:true,
                updatedAt: 'updated_at',
                createdAt: 'created_at'
            }
        });
} else {
    /** connection en local */
    sequelize = new Sequelize( process.env.DATABASE_URL,
        {
            logging: false,
            define:{
                underscored:true,
                updatedAt: 'updated_at',
                createdAt: 'created_at'
            }
        });

    /** DOCKER */
    // sequelize = new Sequelize(
    //     process.env.PGDATABASE,
    //     process.env.PGUSER,
    //     process.env.PGPASSWORD,
    //     {
    //         host: 'db',
    //         dialect: 'postgres',
    //         logging: false,
    //         define:{
    //             underscored:true,
    //             updatedAt: 'updated_at',
    //             createdAt: 'created_at'
    //         }
    //     });
}
sequelize
    .authenticate()
    .then(() => {
        console.log('connection database ok');
    })
    .catch(err => {
        console.error('erreur connection database: ', err);
    });

module.exports = sequelize;