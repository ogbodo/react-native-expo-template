import React from 'react';
import { useQuery, QueryCache, ReactQueryCacheProvider } from 'react-query';

import Router from './router';
import ThemeProvider from './theme';
import OfflineBar from './commons/notifications/offline-bar';

export default function AppRouter() {
  return (
    <ThemeProvider>
      <OfflineBar />
      <Router />
    </ThemeProvider>
  );
}
