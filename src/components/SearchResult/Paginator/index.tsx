import * as React from 'react';
import { Container } from '@material-ui/core';
import styled from 'styled-components';
import Pagination from '@material-ui/lab/Pagination';
import useQueryContext from '../../../store/QueryContext';

/**
 * @description Paginator is responsabile for render the Pagination of the query.
 * @return {component}
 */

const StyledContainer = styled(Container)`
  background-color: #fafafa;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px;
  margin-top: 20px;
  margin-bottom: 0px;
`;

interface PaginatorProps {
  pages: number;
}
const Paginator: React.SFC<PaginatorProps> = ({ pages }) => {
  const { query, nextPage } = useQueryContext();
  const handlePage = (event: React.ChangeEvent<unknown>, value: number) => {
    nextPage(value);
  };
  return (
    <StyledContainer>
      <Pagination count={pages} page={query.page} onChange={handlePage} />
    </StyledContainer>
  );
};

export default Paginator;
