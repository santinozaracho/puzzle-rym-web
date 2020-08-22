import * as React from 'react';
import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core';
import Searcher from '../Searcher';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

interface TopBarProps {}
const TopBar: React.SFC<TopBarProps> = (props) => {
  const classes = useStyles();
  return (
    <AppBar className={classes.root} position='static'>
      <Toolbar>
        <Searcher />
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
