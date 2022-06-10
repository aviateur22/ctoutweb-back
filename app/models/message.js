const sequelize = require('../database/client');
const {DataTypes, Model} = require('sequelize');

class Message extends Model{
}

Message.init({
    reason: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    name: DataTypes.STRING,
    message: DataTypes.STRING,
},{
    sequelize,
    tableName:'message'
});
module.exports = Message;