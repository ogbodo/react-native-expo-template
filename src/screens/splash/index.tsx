import React, { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';

import Button from '../../components/button';
import { screenGridSizeState } from '../../global/grid/atoms';
import CARD_ITEM from '../../utils/getItemCardSize';
import { NavigationInterface } from '../types';

import { Container } from './styles';
interface SplashScreenProp extends NavigationInterface {
  testID?: string;
}

export default function SplashScreen({ navigation }: SplashScreenProp) {
  const setGridState = useSetRecoilState(screenGridSizeState);

  useEffect(() => {
    handleAppLayout();
    checkInitialLaunch();
  }, []);

  // set default card sizes for app when app is launched
  const handleAppLayout = () => setGridState(() => ({ ...CARD_ITEM }));

  // do checks here for initial launch and subsequent launch
  const checkInitialLaunch = () => navigation.replace('SignupScreen');

  return (
    <Container>
      <Button title="Splash Screen" />
    </Container>
  );
}
