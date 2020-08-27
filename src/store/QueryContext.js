import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

export const QueryContext = createContext();
QueryContext.displayName = 'QueryContext';

export const QueryProvider = ({ children }) => {
  const [query, setQuery] = useState({
    entity: 'characters',
    searchString: '',
    filter: {
      name: false,
      episode: false,
    },
    page: 1,
    ready: false,
  });

  const clearQuery = () => {
    setQuery({
      entity: 'characters',
      searchString: '',
      filter: {
        name: false,
        episode: false,
      },
      page: 1,
      ready: false,
    });
  };
  const setNameFilter = (nameFilter) => {
    setQuery({ ...query, filter: { ...query.filter, name: nameFilter } });
  };
  const setEpisodeFilter = (episodeFilter) => {
    setQuery({ ...query, filter: { ...query.filter, episode: episodeFilter } });
  };

  const setSearchString = (searchString) => {
    let ready = searchString.length > 2;
    setQuery({ ...query, searchString, ready });
  };

  const setEntity = (entity) => {
    setQuery({ ...query, entity, page: 1 });
  };

  const nextPage = (page) => {
    setQuery({ ...query, page });
  };
  console.log(query);
  return (
    <QueryContext.Provider
      value={{
        query,
        setQuery,
        clearQuery,
        setEntity,
        setNameFilter,
        setEpisodeFilter,
        setSearchString,
        nextPage,
      }}
    >
      {children}
    </QueryContext.Provider>
  );
};

export default function useQueryContext() {
  return useContext(QueryContext);
}
