import React from 'react';
import TopBar from './TopBar';
import { makeStyles } from '@material-ui/core/styles';
import Searcher from '../Searcher';
import View from '../View';
import { Fab } from '@material-ui/core';
import { ClearOutlined } from '@material-ui/icons';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Landing() {
  return (
    <React.Fragment>
      <TopBar />
      <View name='pero' />
    </React.Fragment>
  );
}
