import { useEffect, useReducer } from 'react';
import { useQuery } from 'urql';

const initialState = {
  currentPage: 0,
  pagesData: {},
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'RESET':
      console.log('Paginated:Resetting');
      return initialState;
    case 'INCREMENT_PAGE':
      return {
        ...state,
        currentPage: state.currentPage + 1,
      };
    case 'UPDATE_DATA':
      console.log('Paginated:Updating');
      if (!action.payload.data) return state;
      return {
        ...state,
        pagesData: {
          ...state.pagesData,
          [state.currentPage]: action.payload.data,
        },
      };
    default:
      return state;
  }
};

function usePaginatedQuery({ query, variables, toFullPage, limit }: any) {
  const [resultsCache, dispatch] = useReducer(reducer, initialState);

  const [{ data: currentPageData, fetching, error }] = useQuery({
    query,
    variables: {
      ...variables,
      take: limit,
      skip: resultsCache.currentPage * limit,
    },
  });

  const fetchMore = () => {
    dispatch({ type: 'INCREMENT_PAGE' });
  };

  const resetCache = () => {
    dispatch({ type: 'RESET' });
  };

  const mergeResults = () => {
    dispatch({ type: 'UPDATE_DATA', payload: { data: currentPageData } });
  };

  useEffect(resetCache, [JSON.stringify(variables)]);
  useEffect(mergeResults, [currentPageData]);

  return {
    ...resultsCache,
    data: toFullPage(resultsCache.pagesData),
    fetching,

    fetchMore,
    error,
  };
}

export default usePaginatedQuery;
