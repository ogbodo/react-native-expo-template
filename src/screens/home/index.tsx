import React from 'react';
import Button from '../../components/button';

import { NavigationInterface } from '../types';
import { Container, ContentArea, Welcome } from './styles';

interface HomeScreenProp extends NavigationInterface {
  testID?: string;
}

export default function HomeScreen({ navigation }: HomeScreenProp) {
  return (
    <Container>
      <ContentArea
        contentContainerStyle={{ flexGrow: 1, alignItems: 'center' }}
      >
        <Button title="Home screen button" />
        <Welcome>Home Screen</Welcome>
      </ContentArea>
    </Container>
  );
}
