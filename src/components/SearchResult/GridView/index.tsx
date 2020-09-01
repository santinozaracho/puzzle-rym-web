import React from 'react';
import { Grid, Paper, Container } from '@material-ui/core';
import styled from 'styled-components';
import ItemView from './ItemView';
import Paginator from '../Paginator';

/**
 * @description Grid View is responsible render the Grid for Items Views and the Paginator.
 * @return {component}
 */

interface GridViewProps {
  collectionResult: Array<Object>;
  pages: number;
}

const StyledPaper = styled(Paper)`
  padding: 30px;
`;
const StyledPaperPaginator = styled(Paper)`
  margin-top: 10px;
`;

const GridView: React.FC<GridViewProps> = ({ collectionResult, pages }) => {
  return (
    <Container>
      <StyledPaper>
        <Grid container spacing={4}>
          {collectionResult.map((item: any) => (
            <ItemView item={item} />
          ))}
        </Grid>
      </StyledPaper>
      <StyledPaperPaginator>
        <Paginator pages={pages} />
      </StyledPaperPaginator>
    </Container>
  );
};
export default GridView;
