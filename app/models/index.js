const Message = require('./message');
const User = require('./user');
const UserRole= require('./userRole');
const MessageReason = require('./messageReason');

/**relation user->userRole */
User.belongsTo(UserRole,{
    foreignKey: 'role_id',
    as: 'userRole'
});

UserRole.hasMany(User,{
    foreignKey: 'role_id',
    as: 'userRole'
});

/** Relation user->messging */
User.hasMany(Message,{
    foreignKey: 'user_id',
    as: 'messaging'
}),

Message.belongsTo(User,{
    foreignKey: 'user_id',
    as: 'messaging'
});

/** Relation messaging -> messagingReason */
Message.belongsTo(MessageReason,{
    foreignKey: 'message_reason_id',
    as: 'messageReason'
});

MessageReason.hasMany(Message,{
    foreignKey: 'message_reason_id',
    as: 'messageReason'
})



module.exports = {
    Message,
    User,
    UserRole,
    MessageReason
};