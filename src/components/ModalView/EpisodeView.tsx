import React from 'react';
import {
  Container,
  Modal,
  CardContent,
  Paper,
  Typography,
  Card,
  CardHeader,
  CardMedia,
  Badge,
  Chip,
  Avatar,
} from '@material-ui/core';
import styled from 'styled-components';

interface EpisodesViewProps {
  episode: {
    episode: string;
    name: string;
    characters: [{ name: string; image: string }];
    air_date: string;
    created: string;
  };
}

const StyledPaper = styled(Paper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  margin-top: 20px;
  min-width: 300px;
  max-width: 600px;
`;
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

const EpisodesView: React.FC<EpisodesViewProps> = (props) => {
  let { name, episode, air_date, characters, created } = props.episode;
  return (
    <StyledCard>
      <StyledCardContent>
        <Typography gutterBottom variant='h5' component='h2'>
          {name}
        </Typography>
        <Typography>Episode: {episode}</Typography>
        <Typography>Air Date: {air_date}</Typography>
        <Typography>Created: {created}</Typography>

        <Typography>Characters:</Typography>
        {characters.map((char, i) => (
          <Chip
            key={i}
            variant='outlined'
            avatar={<Avatar src={char.image} />}
            label={char.name}
          />
        ))}
      </StyledCardContent>
    </StyledCard>
  );
};

export default EpisodesView;
