import React from 'react';
import { Container } from '@material-ui/core';
import { gql, useQuery } from '@apollo/client';
import styled from 'styled-components';
import GridView from './GridView';
import useQueryContext from '../../store/QueryContext';
import ErrorView from './ErrorView';
import LoadingView from './LoadingView';

interface CharactersProps {}

export const GET_EPISODES = gql`
  query Characters($page: Int!, $nameFilter: String) {
    characters(page: $page, filter: { name: $nameFilter }) {
      info {
        next
        count
        pages
      }
      results {
        name
        image
      }
    }
  }
`;
const StyledContainer = styled(Container)`
  padding-top: 16px;
  padding-bottom: 16px;
`;

const Characters: React.FC<CharactersProps> = (props) => {
  const { query } = useQueryContext();
  const { loading, error, data } = useQuery(GET_EPISODES, {
    variables: {
      page: query.page,
      nameFilter: query.filter.name ? query.searchString : '',
    },
  });
  if (loading) return <LoadingView />;
  if (error) return <ErrorView />;

  return (
    <GridView
      collectionResult={data.characters.results}
      pages={data.characters.info.pages}
    />
  );
};

export default Characters;
