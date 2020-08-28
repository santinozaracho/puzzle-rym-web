import * as React from 'react';
import { Typography, Paper } from '@material-ui/core';
import styled from 'styled-components';
import { HomeRounded } from '@material-ui/icons';

const StyledPaper = styled(Paper)`
  margin: 30px;
  flex-grow: 1;
  max-width: 600px;
`;

interface IntroProps {}

const Intro: React.SFC<IntroProps> = (props) => {
  return (
    <StyledPaper>
      <Typography
        component='h1'
        variant='h2'
        align='center'
        color='textPrimary'
        gutterBottom
      >
        Find anything of Rick and Morty here!!.
      </Typography>
      <Typography variant='h5' align='center' color='textSecondary' paragraph>
        Something short and leading about the collection below—its contents, the
        creator, etc. Make it short and sweet, but not too short so folks
        don&apos;t simply skip over it entirely.
      </Typography>
    </StyledPaper>
  );
};

export default Intro;
