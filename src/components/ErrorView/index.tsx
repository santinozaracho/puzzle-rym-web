import React from 'react';
import { Paper, Typography, LinearProgress } from '@material-ui/core';
import styled from 'styled-components';

const StyledPaper = styled(Paper)`
  margin: 30px;
`;

interface ErrorViewProps {}
const ErrorView: React.FC<ErrorViewProps> = (props) => {
  return (
    <StyledPaper>
      <LinearProgress variant='determinate' value={100} color='secondary' />
      <Typography
        component='h1'
        variant='h2'
        align='center'
        color='textPrimary'
        gutterBottom
      >
        We're Sorry, We couldn't find that your are searching.
      </Typography>
    </StyledPaper>
  );
};

export default ErrorView;
