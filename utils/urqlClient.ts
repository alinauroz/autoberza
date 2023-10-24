import GQL from 'graphql-client';

export const ssClient = require('graphql-client')({
  url: `${process.env.APP_URL}/api/graphql`,
});
