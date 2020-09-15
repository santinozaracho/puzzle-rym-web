import { gql } from '@apollo/client';

export const GET_CHARACTER = gql`
  query Character($id: ID!) {
    character(id: $id) {
      name
      status
      species
      type
      gender
      origin {
        name
      }
      location {
        name
      }
      image
      episode {
        name
        episode
      }
    }
  }
`;
export const GET_EPISODE = gql`
  query Epidose($id: ID!) {
    episode(id: $id) {
      name
      air_date
      episode
      characters {
        name
        image
      }
      created
    }
  }
`;
export const GET_LOCATION = gql`
  query Location($id: ID!) {
    location(id: $id) {
      name
      type
      dimension
      residents {
        name
        image
      }
      created
    }
  }
`;
