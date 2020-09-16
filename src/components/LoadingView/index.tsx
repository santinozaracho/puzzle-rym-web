import React from 'react';
import { Typography, LinearProgress, Paper, Backdrop } from '@material-ui/core';
import styled from 'styled-components';

/**
 * @description Loading Component, renders a PorgressLine to indicate when the component is retrieving data.
 * @return {component}
 */

const StyledPaper = styled(Paper)`
  margin: auto;
`;

interface LoadingViewProps {}
const LoadingView: React.FC<LoadingViewProps> = (props) => {
  return (
    <Backdrop open={true}>
      <StyledPaper>
        <LinearProgress color='secondary' />
        <Typography
          component='h1'
          variant='h2'
          align='center'
          color='textPrimary'
        >
          Loading.
        </Typography>
      </StyledPaper>
    </Backdrop>
  );
};

export default LoadingView;
