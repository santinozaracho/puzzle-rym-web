import React from 'react';
import {
  Card,
  Typography,
  Container,
  LinearProgress,
  Paper,
} from '@material-ui/core';
import styled from 'styled-components';
const StyledPaper = styled(Paper)`
  margin: 30px;
`;
interface LoadingViewProps {}
const LoadingView: React.FC<LoadingViewProps> = (props) => {
  return (
    <StyledPaper>
      <LinearProgress color='secondary' />
      <Typography
        component='h1'
        variant='h2'
        align='center'
        color='textPrimary'
        gutterBottom
      >
        Loading.
      </Typography>
    </StyledPaper>
  );
};

export default LoadingView;
