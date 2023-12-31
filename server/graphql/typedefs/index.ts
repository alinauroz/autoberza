import { gql } from 'graphql-tag';
import projectTypedefs from './project';

const typeDefs = gql`
  scalar Date

  type User {
    id: String!
    name: String
    email: String
    address: String
    state: String
    country: String
    isAdmin: Boolean
    phone: String
    isEmailVerified: Boolean
  }

  type LoginResponse {
    token: String
    error: String
    user: User
  }

  type StatusResponse {
    message: String
    status: String!
  }
  type MessageResponse {
    message: String!
  }

  type Query {
    user: User
  }
  type Mutation {
    registerUser(
      name: String!
      email: String!
      address: String
      phone: String
      state: String
      country: String
      password: String!
    ): User
    updateUser(
      name: String
      email: String
      phoneNo: String
      currentPassword: String
      newPassword: String
    ): User
    login(email: String!, password: String!): LoginResponse!
    sendResetPasswordLink(email: String!): MessageResponse!
    resetPassword(password: String!, token: String!): StatusResponse!
    sendVerificationEmail(email: String!): MessageResponse!
    verifyEmail(token: String!): StatusResponse!
    updateAdminStatus(userId: String!, status: Boolean): User

    sendPhoneOtp(phoneNo: String): StatusResponse
    phoneOtpLogin(otp: String, phoneNo: String): LoginResponse!
  }

  ${projectTypedefs}
`;

export default typeDefs;
