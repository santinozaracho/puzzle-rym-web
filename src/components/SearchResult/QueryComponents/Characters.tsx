import React from 'react';
import { useQuery } from '@apollo/client';
import GridView from '../GridView';
import useQueryContext from '../../../store/QueryContext';
import ErrorView from '../../ErrorView';
import LoadingView from '../../LoadingView';
import { GET_CHARACTERS } from '../../../queries/entityQueries';

/**
 * @description Characters Component is responsible for Query Characters to API and render the Grid View.
 * @return {component}
 */

interface CharactersProps {}

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
