import React from 'react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Container,
} from '@material-ui/core';
import styled from 'styled-components';
import Paginator from './Paginator';

interface GridViewProps {
  collectionResult: Array<Object>;
  pages: number;
}

const StyledContainer = styled(Container)`
  padding-top: 16px;
  padding-bottom: 16px;
`;

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

const GridView: React.FC<GridViewProps> = ({ collectionResult, pages }) => {
  return (
    <StyledContainer maxWidth='md'>
      <Grid container spacing={4}>
        {collectionResult.map((item: any) => (
          <Grid item key={item.episode} xs={12} sm={6} md={4}>
            <StyledCard>
              {item.image && (
                <StyledCardMedia image={item.image} title={item.name} />
              )}

              <StyledCardContent>
                <Typography gutterBottom variant='h5' component='h2'>
                  {item.name}
                </Typography>
                {item.episode && <Typography>{item.episode}</Typography>}
                {item.dimension && <Typography>{item.dimension}</Typography>}
              </StyledCardContent>

              <CardActions>
                <Button size='small' color='primary'>
                  Open Details
                </Button>
              </CardActions>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
      <Paginator pages={pages} />
    </StyledContainer>
  );
};
export default GridView;
