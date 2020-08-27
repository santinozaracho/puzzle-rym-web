import React from 'react';
import { Container } from '@material-ui/core';
import styled from 'styled-components';
import useQueryContext from '../../store/QueryContext';
import LoadingView from './LoadingView';
import ErrorView from './ErrorView';
import Characters from './Characters';
import Locations from './Locations';
import Episodes from './Episodes';

interface SearchResultProps {}

const StyledContainer = styled(Container)`
  padding-top: 16px;
  padding-bottom: 16px;
`;

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
  return searchResult;
};

export default SearchResult;
