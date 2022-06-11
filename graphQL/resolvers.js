//const models = require('../app/models');
const resolvers = {
    Query: {
        async message(root, { id }, { models }) {
            return models.Message.findByPk(id);
        },

        async messages(root, args, { models }) {
            return models.Message.findAll();
        }
    },

    Mutation: {
        async createMessage(root, { reason, name, email, phone, message, is_check, message_reason_id, user_id }, { models }) {
            return models.Message.create({
                reason,
                name,
                email,
                phone,
                message,
                is_check,
                message_reason_id,
                user_id
            });
        },
        
        async deleteMessage(
            root,
            { id },
            { models }
        ) {
            return models.Message.destroy(id);
        },
    },
};
  
module.exports = resolvers;