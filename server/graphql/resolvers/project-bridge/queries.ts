// Project Queries here

import * as fieldQueries from '../queries/fields.query';
import * as adQueries from '../queries/ad.queries';

export default {
  ...fieldQueries,
  ...adQueries,
};
