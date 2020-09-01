import React from 'react';
import { gql, useQuery } from '@apollo/client';
import GridView from '../GridView';
import useQueryContext from '../../../store/QueryContext';
import ErrorView from '../../ErrorView';
import LoadingView from '../../LoadingView';

interface CharactersProps {}

export const GET_CHARACTERS = gql`
  query Characters($page: Int!, $nameFilter: String, $typeFilter: String) {
    characters(page: $page, filter: { name: $nameFilter, type: $typeFilter }) {
      info {
        next
        count
        pages
      }
      results {
        id
        name
        image
      }
    }
  }
`;

const Characters: React.FC<CharactersProps> = (props) => {
  const { query } = useQueryContext();
  const { loading, error, data } = useQuery(GET_CHARACTERS, {
    variables: {
      page: query.page,
      nameFilter: query.filter.extra ? '' : query.searchString,
      typeFilter: query.filter.extra ? query.searchString : '',
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
