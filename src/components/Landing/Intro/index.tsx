import * as React from 'react';
import { Typography, Paper, Link } from '@material-ui/core';
import styled from 'styled-components';

const StyledPaper = styled(Paper)`
  align-items: center;
  justify-content: center;
  margin: auto;
  margin-top: 20px;
  min-width: 300px;
  max-width: 600px;
  padding: 10px;
`;

/**
 * @description Welcome Screen with project introduction.
 * @return {component}
 */

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
        This project was built for an Challenge of Puzzle Co. Made by Santino
        Zaracho on
        {<Link href='https://github.com/santinozaracho'>GitHub</Link>}, as
        abstract, this WebApp made in React.js, with Apollo-GraphQL shows you
        any content of Rick And Morty serie.
      </Typography>
    </StyledPaper>
  );
};

export default Intro;
