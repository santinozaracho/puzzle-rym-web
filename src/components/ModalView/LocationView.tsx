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

interface LocationViewProps {
  location: {
    name: string;
    dimension: string;
    residents: [{ name: string; image: string }];
    type: string;
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

const LocationView: React.FC<LocationViewProps> = (props) => {
  let { name, type, created, dimension, residents } = props.location;
  return (
    <StyledCard>
      <StyledCardContent>
        <Typography gutterBottom variant='h5' component='h2'>
          {name}
        </Typography>
        <Typography>Type: {type}</Typography>
        <Typography>Dimension: {dimension}</Typography>
        <Typography>Created: {created}</Typography>
        <Typography>Residents:</Typography>
        {residents.map((res, i) => (
          <Chip
            key={i}
            variant='outlined'
            avatar={<Avatar src={res.image} />}
            label={res.name}
          />
        ))}
      </StyledCardContent>
    </StyledCard>
  );
};

export default LocationView;
