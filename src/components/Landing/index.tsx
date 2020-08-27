import React from 'react';
import TopBar from './TopBar';
import Intro from './Intro';
import View from '../SearchResult';
import useQueryContext from '../../store/QueryContext';

export default function Landing() {
  const { query } = useQueryContext();

  return (
    <React.Fragment>
      <TopBar />
      {query.ready ? <View /> : <Intro />}
    </React.Fragment>
  );
}
