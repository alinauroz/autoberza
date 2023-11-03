import { GraphQLClient } from 'graphql-request';
export const ssClient = new GraphQLClient(`${process.env.APP_URL}/api/graphql`);

//export const ssClient = require('graphql-client')({
//  url: ""
//});
