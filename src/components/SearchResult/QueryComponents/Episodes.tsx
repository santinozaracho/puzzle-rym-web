import React from 'react';
import { useQuery } from '@apollo/client';
import GridView from '../GridView';
import useQueryContext from '../../../store/QueryContext';
import ErrorView from '../../ErrorView';
import LoadingView from '../../LoadingView';
import { GET_EPISODES } from '../../../queries/entityQueries';

/**
 * @description Episodes Component is responsible for Query Episodes to API and render the Grid View.
 * @return {component}
 */

interface EpisodesProps {}

const Episodes: React.FC<EpisodesProps> = (props) => {
  const { query } = useQueryContext();
  const { loading, error, data } = useQuery(GET_EPISODES, {
    variables: {
      page: query.page,
      nameFilter: query.filter.extra ? '' : query.searchString,
      episodeFilter: query.filter.extra ? query.searchString : '',
    },
  });
  if (loading) return <LoadingView />;
  if (error) return <ErrorView />;
  return (
    <GridView
      collectionResult={data.episodes.results}
      pages={data.episodes.info.pages}
    />
  );
};

export default Episodes;
