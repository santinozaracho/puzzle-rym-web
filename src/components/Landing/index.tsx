import React from 'react';
import TopBar from '../TopBar';
import Intro from './Intro';
import SearchResult from '../SearchResult';
import useQueryContext from '../../store/QueryContext';
import styled from 'styled-components';
import { Container } from '@material-ui/core';

/**
 * @description Landing Component, is responsible for shows to user the result of the search or the Welcome Component..
 * @return {component}
 */

const StyledContainer = styled(Container)`
  flex-grow: 1;
  justify-content: center;
  margin: auto;
  padding: 16px;
  align-items: center;
`;

export default function Landing() {
  const { query } = useQueryContext();

  return (
    <StyledContainer>
      <TopBar />
      <StyledContainer>
        {query.ready ? <SearchResult /> : <Intro />}
      </StyledContainer>
    </StyledContainer>
  );
}
