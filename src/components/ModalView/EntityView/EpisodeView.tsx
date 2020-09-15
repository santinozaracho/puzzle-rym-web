import React from 'react';
import { CardContent, Typography, Card, Chip, Avatar } from '@material-ui/core';
import styled from 'styled-components';

/**
 * @description This component is responsible for render the fields of Episode.
 * @return {component}
 */

interface EpisodesViewProps {
  episode: {
    episode: string;
    name: string;
    characters: [{ name: string; image: string }];
    air_date: string;
    created: string;
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

const StyledChip = styled(Chip)`
  margin: 5px;
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
          <StyledChip
            key={'Entity-Episode-AvatarChip-' + i}
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
