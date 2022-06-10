const sequelize = require('../database/client');
const {DataTypes, Model} = require('sequelize');

class MessageReason extends Model{
}

MessageReason.init({
    reason : DataTypes.STRING,
},{
    sequelize,
    tableName:'message_reason'
});
module.exports = MessageReason;