import GlobalStyle from 'components/styles/GlobalStyle';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import Router from 'shared/Router';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <Router />
    </QueryClientProvider>
  );
};

export default App;
