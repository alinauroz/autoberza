import { Client } from 'urql';
import { cacheExchange, fetchExchange } from 'urql';
import Cookies from 'js-cookie';

const client = new Client({
  url: '/api/graphql',
  exchanges: [cacheExchange, fetchExchange],
  fetchOptions: {
    headers: {
      Authorization: `bearer ${Cookies.get('token')}`,
      locale: Cookies.get('locale') || '',
    },
  },
});

export default client;
