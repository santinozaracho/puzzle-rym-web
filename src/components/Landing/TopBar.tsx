import * as React from 'react';
import styled from 'styled-components';
import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core';

import Searcher from '../Searcher';

const StyledAppBar = styled(AppBar)`
  flex-grow: 1;
  justify-content: center;
  align-items: center;
`;

interface TopBarProps {}

const TopBar: React.SFC<TopBarProps> = (props) => {
  return (
    <StyledAppBar position='static'>
      <Toolbar>
        <Searcher />
      </Toolbar>
    </StyledAppBar>
  );
};

export default TopBar;
