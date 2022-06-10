const sequelize = require('../database/client');
const {DataTypes, Model} = require('sequelize');

class UserRole extends Model{
}

UserRole.init({
    role : DataTypes.STRING,
},{
    sequelize,
    tableName:'user_role'
});
module.exports = UserRole;