import { userMutations } from './mutations';
import { userQueries } from './queries';
import projectQueries from './project-bridge/queries';
import projectMutations from './project-bridge/mutations';
import projectTypes from './project-bridge/types';
import Date from './types/Date';
import * as User from './types/User';

const resolvers = {
  Query: {
    ...userQueries,
    ...projectQueries,
  },
  Mutation: {
    ...userMutations,
    ...projectMutations,
  },
  User,
  Date,
  ...projectTypes,
};

export default resolvers;
