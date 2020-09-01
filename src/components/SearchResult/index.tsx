import React from 'react';
import useQueryContext from '../../store/QueryContext';
import ModalView from '../ModalView';
import Characters from './QueryComponents/Characters';
import Locations from './QueryComponents/Locations';
import Episodes from './QueryComponents/Episodes';

/**
 * @description Search Result Component is responsible for render selected component by entity requeried in the TopBar and Support the Modal.
 * @return {component}
 */

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
