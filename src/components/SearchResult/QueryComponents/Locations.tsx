import React from 'react';
import { useQuery } from '@apollo/client';
import GridView from '../GridView';
import useQueryContext from '../../../store/QueryContext';
import ErrorView from '../../ErrorView';
import LoadingView from '../../LoadingView';
import { GET_LOCATIONS } from '../../../queries/entityQueries';

/**
 * @description Locations Component is responsible for Query Locations to API and render the Grid View.
 * @return {component}
 */

interface LocationsProps {}

const Locations: React.FC<LocationsProps> = (props) => {
  const { query } = useQueryContext();
  const { loading, error, data } = useQuery(GET_LOCATIONS, {
    variables: {
      page: query.page,
      nameFilter: query.filter.extra ? '' : query.searchString,
      dimensionFilter: query.filter.extra ? query.searchString : '',
    },
  });
  if (loading) return <LoadingView />;
  if (error) return <ErrorView />;

  return (
    <GridView
      collectionResult={data.locations.results}
      pages={data.locations.info.pages}
    />
  );
};

export default Locations;
