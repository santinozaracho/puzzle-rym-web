import React from 'react';
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  CardActionArea,
} from '@material-ui/core';
import styled from 'styled-components';

import useQueryContext from '../../../../store/QueryContext';

/**
 * @description Item View is responsible for render the items card in Grid View.
 * @return {component}
 */

interface ItemViewProps {
  item: {
    id: string;
    name: string;
    episode: string;
    dimension: string;
    image: string;
  };
}

const StyledCard = styled(Card)`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const StyledCardContent = styled(CardContent)`
  flex-grow: 1;
`;

const StyledCardMedia = styled(CardMedia)`
  padding-top: 56.25%;
`;

const ItemView: React.FC<ItemViewProps> = ({ item }) => {
  const { id, image, name, dimension, episode } = item;
  const { openModalItem } = useQueryContext();
  const openItem = (id: string) => openModalItem(id);
  return (
    <Grid item key={id} xs={12} sm={6} md={4}>
      <CardActionArea onClick={() => openItem(id)}>
        <StyledCard>
          {item.image && <StyledCardMedia image={image} title={name} />}

          <StyledCardContent>
            <Typography gutterBottom variant='h5' component='h2'>
              {name}
            </Typography>
            {episode && <Typography>{episode}</Typography>}
            {dimension && <Typography>{dimension}</Typography>}
          </StyledCardContent>

          <Button disabled>View Details</Button>
        </StyledCard>
      </CardActionArea>
    </Grid>
  );
};
export default ItemView;
