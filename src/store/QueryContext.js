import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

export const QueryContext = createContext();
QueryContext.displayName = 'QueryContext';

export const QueryProvider = ({ children }) => {
  const [query, setQuery] = useState({
    entity: 'characters',
    filterOption: 'Type',
    searchString: '',
    filter: {
      name: true,
      extra: false,
    },
    page: 1,
    ready: false,
    modalItem: {
      open: false,
      itemID: '',
    },
  });

  const clearQuery = () => {
    setQuery({
      entity: 'characters',
      filterOption: 'Type',
      searchString: '',
      filter: {
        name: true,
        extra: false,
      },
      page: 1,
      ready: false,
    });
  };
  const setNameFilter = (name) => {
    setQuery({ ...query, filter: { ...query.filter, name } });
  };
  const setExtraFilter = (extra) => {
    setQuery({ ...query, filter: { ...query.filter, extra } });
  };

  const setSearchString = (searchString) => {
    let ready = searchString.length > 2;
    setQuery({ ...query, searchString, ready });
  };

  const setEntity = (entity) => {
    let filterOption =
      entity == 'characters'
        ? 'Type'
        : entity == 'episodes'
        ? 'Episode'
        : 'Dimension';
    setQuery({
      ...query,
      entity,
      filterOption,
      page: 1,
      filter: { name: true, extra: false },
    });
  };

  const nextPage = (page) => {
    setQuery({ ...query, page });
  };

  const closeModalItem = () => {
    setQuery({ ...query, modalItem: { open: false, itemID: '' } });
  };

  const openModalItem = (idemID) => {
    setQuery({ ...query, modalItem: { open: true, idemID } });
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
        setExtraFilter,
        setSearchString,
        nextPage,
        closeModalItem,
        openModalItem,
      }}
    >
      {children}
    </QueryContext.Provider>
  );
};

export default function useQueryContext() {
  return useContext(QueryContext);
}
