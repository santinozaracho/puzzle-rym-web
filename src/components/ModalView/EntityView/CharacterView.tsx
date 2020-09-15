import React from 'react';
import {
  CardContent,
  Typography,
  Card,
  CardMedia,
  Chip,
} from '@material-ui/core';
import styled from 'styled-components';

/**
 * @description This component is responsible for render the fields of Character.
 * @return {component}
 */

interface CharacterViewProps {
  character: {
    image: string;
    name: string;
    episode: [{ name: string }];
    origin: { name: string };
    location: { name: string };
    status: string;
    type: string;
    gender: string;
    species: string;
  };
}

const StyledCard = styled(Card)`
  height: 100%;
  width: 100%;
  margin: 10px;
  display: flex;
  flex-direction: column;
`;

const StyledCardContent = styled(CardContent)`
  flex-grow: 1;
`;

const StyledCardMedia = styled(CardMedia)`
  padding-top: 56.25%;
`;
const StyledChip = styled(Chip)`
  margin: 5px;
`;

const CharacterView: React.FC<CharacterViewProps> = (props) => {
  let {
    image,
    name,
    episode,
    origin,
    location,
    gender,
    type,
    status,
    species,
  } = props.character;
  return (
    <StyledCard>
      <StyledCardMedia image={image} title={name} />

      <StyledCardContent>
        <Typography gutterBottom variant='h5' component='h2'>
          {name}
        </Typography>
        <Typography>Type: {type}</Typography>
        <Typography>Gender: {gender}</Typography>
        <Typography>Status: {status}</Typography>
        <Typography>Species: {species}</Typography>
        <Typography>Origin: {origin.name}</Typography>
        <Typography>Location: {location.name}</Typography>
        <Typography>Episodes:</Typography>
        {episode.map((ep, i) => (
          <StyledChip key={'Entity-Char-EpisodeChip' + i} label={ep.name} />
        ))}
      </StyledCardContent>
    </StyledCard>
  );
};

export default CharacterView;
