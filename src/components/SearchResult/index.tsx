import React from 'react';
import useQueryContext from '../../store/QueryContext';
import ModalView from '../ModalView';
import Characters from './QueryComponents/Characters';
import Locations from './QueryComponents/Locations';
import Episodes from './QueryComponents/Episodes';

interface SearchResultProps {}

const connectQuery: any = {
  characters: () => <Characters />,

  locations: () => <Locations />,

  episodes: () => <Episodes />,
};

const SearchResult: React.FC<SearchResultProps> = (props) => {
  const { query } = useQueryContext();
  const searchResult = connectQuery[query.entity]();

  return (
    <React.Fragment>
      <ModalView />
      {searchResult}
    </React.Fragment>
  );
};

export default SearchResult;
