import React from 'react';
import { gql, useQuery } from '@apollo/client';
import GridView from '../GridView';
import useQueryContext from '../../../store/QueryContext';
import ErrorView from '../../ErrorView';
import LoadingView from '../../LoadingView';

interface LocationsProps {}

export const GET_LOCATIONS = gql`
  query Locations($page: Int!, $nameFilter: String, $dimensionFilter: String) {
    locations(
      page: $page
      filter: { name: $nameFilter, dimension: $dimensionFilter }
    ) {
      info {
        next
        count
        pages
      }
      results {
        id
        name
        dimension
      }
    }
  }
`;

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
