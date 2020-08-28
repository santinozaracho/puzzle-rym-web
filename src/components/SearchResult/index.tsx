import React from 'react';
import useQueryContext from '../../store/QueryContext';
import LoadingView from '../LoadingView';
import ErrorView from '../ErrorView';
import ModalView from '../ModalView';
import Characters from './Characters';
import Locations from './Locations';
import Episodes from './Episodes';

interface SearchResultProps {}

const SearchResult: React.FC<SearchResultProps> = (props) => {
  const { query } = useQueryContext();
  let searchResult = <LoadingView />;
  switch (query.entity) {
    case 'characters':
      searchResult = <Characters />;
      break;
    case 'locations':
      searchResult = <Locations />;
      break;
    case 'episodes':
      searchResult = <Episodes />;
      break;

    default:
      searchResult = <ErrorView />;
      break;
  }
  return (
    <React.Fragment>
      <ModalView />
      {searchResult}
    </React.Fragment>
  );
};

export default SearchResult;
