import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

/**
 * @description Query Context is responsible for Inject the User Query as provider for use as a Hook in all App Context.
 * @return {provider}
 */

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
      modalItem: {
        open: false,
        itemID: '',
      },
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
      entity === 'characters'
        ? 'Type'
        : entity === 'episodes'
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

  const openModalItem = (itemID) => {
    setQuery({ ...query, modalItem: { open: true, itemID } });
  };

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

QueryProvider.propTypes = {
  children: PropTypes.node,
};
