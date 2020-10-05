import React, { useState } from 'react';
import { enableScreens } from 'react-native-screens';
import AppLoading from './src/components/AppLoading';
import AppRouter from './src';
import { RecoilRoot } from 'recoil';

export default function App() {
  enableScreens();
  const [isAppReady, setIsAppReady] = useState(false);

  return isAppReady ? (
    <RecoilRoot>
      <AppRouter />
    </RecoilRoot>
  ) : (
    <AppLoading setIsAppReady={setIsAppReady} />
  );
}
