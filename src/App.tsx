import React from 'react';
import { ApolloClientProvider } from './store/ApolloContext';
import CssBaseline from '@material-ui/core/CssBaseline';
import { StylesProvider } from '@material-ui/core/styles';

import Landing from './components/Landing';
import './App.css';
import { QueryProvider } from './store/QueryContext';

const App = () => {
  return (
    <ApolloClientProvider>
      <QueryProvider>
        <CssBaseline>
          <StylesProvider injectFirst>
            <Landing />
          </StylesProvider>
        </CssBaseline>
      </QueryProvider>
    </ApolloClientProvider>
  );
};

export default App;
