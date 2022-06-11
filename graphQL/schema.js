const { gql } = require('apollo-server');

const schema = gql`
    scalar Date

    type Message {
        id: ID!
        reason: String!
        name: String!
        email:  String!
        phone: String!
        message: String!    
        isCheck: Boolean!
        messageReason: MessageReason,
        user: User
        createdAt: Date
        UpdatedAt: Date
    }

    type MessageReason {
        id: ID!
        reason: String!
        createdAt: Date
        UpdatedAt: Date
    }

    type User {
        id: ID!        
        email: String!
        password: String!
        phone: String!
        roleId: Role
        createdAt: Date
        updatedAt: Date
    }

    type Role {
        id: ID!        
        role: String!
        createdAt: Date
        updatedAt: Date
    }

    type Query {        
        "Récupération de tous les messages"
        messages: [Message]

        "Récupération d'un message par son id"
        message(id: ID!): Message        
    }

    type Mutation {
        
        createMessage(
            reason: String!
            name: String!
            email:  String!
            phone: String!
            message: String!    
            is_check: Boolean
            messageReasonId: Int,
            userId: Int
        ): Message
        
        
        "Suppression d'un message"        
        deleteMessage(id: ID!): Boolean
    }
`;
module.exports = schema;