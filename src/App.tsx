import React from 'react';
import { ApolloClientProvider } from './store/ApolloContext';
import CssBaseline from '@material-ui/core/CssBaseline';

import Landing from './components/Landing';
import './App.css';

const App = () => {
  return (
    <ApolloClientProvider>
      <CssBaseline>
        <Landing />
      </CssBaseline>
    </ApolloClientProvider>
  );
};

export default App;
