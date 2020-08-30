import React from 'react';
import {
  Container,
  Modal,
  Paper,
  Typography,
  Card,
  CardHeader,
  CardMedia,
} from '@material-ui/core';
import { gql, useQuery } from '@apollo/client';
import styled from 'styled-components';
import useQueryContext from '../../store/QueryContext';
import ErrorView from '../ErrorView';
import LoadingView from '../LoadingView';
import CharacterView from './CharacterView';
import LocationView from './LocationView';
import EpisodeView from './EpisodeView';

interface ModalBodyProps {}

const GET_CHARACTER = gql`
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
const GET_EPISODE = gql`
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
const GET_LOCATION = gql`
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

const StyledPaper = styled(Paper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  margin-top: 20px;
  min-width: 300px;
  max-width: 600px;
`;

const connectQuery: any = {
  characters: () => GET_CHARACTER,

  locations: () => GET_LOCATION,

  episodes: () => GET_EPISODE,
};

const ModalBody: React.FC<ModalBodyProps> = (props) => {
  const { query, closeModalItem } = useQueryContext();

  let { entity, modalItem } = query;
  console.log(GET_CHARACTER);

  console.log(connectQuery[entity]());

  const { loading, error, data } = useQuery(connectQuery[entity](), {
    variables: {
      id: modalItem.itemID,
    },
  });
  console.log(entity, modalItem.itemID);
  console.log(error);
  console.log(data);

  if (loading) return <LoadingView />;
  if (error) return <ErrorView />;

  let { character, location, episode } = data;

  if (character) return <CharacterView character={character} />;
  if (location) return <LocationView location={location} />;
  if (episode) return <EpisodeView episode={episode} />;

  return <ErrorView />;
};

export default ModalBody;
