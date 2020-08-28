import React from 'react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Paper,
} from '@material-ui/core';
import styled from 'styled-components';
import Paginator from './Paginator';
import useQueryContext from '../../store/QueryContext';

interface GridViewProps {
  collectionResult: Array<Object>;
  pages: number;
}

const StyledPaper = styled(Paper)`
  margin: 30px;
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
  const { openModalItem } = useQueryContext();
  const openItem = () => openModalItem('hola');
  return (
    <StyledPaper>
      <Grid container spacing={4}>
        {collectionResult.map((item: any) => (
          <Grid item key={item.name} xs={12} sm={6} md={4}>
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
                <Button size='small' onClick={openItem} color='primary'>
                  Open Details
                </Button>
              </CardActions>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
      <Paginator pages={pages} />
    </StyledPaper>
  );
};
export default GridView;
