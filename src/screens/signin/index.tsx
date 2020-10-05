import React from 'react';
import CancelIcon from '../../../assets/icons/cancelIcon';

import Button from '../../components/button';
import { NavigationInterface } from '../types';

import { Container, ContentArea, IconContainer, Welcome } from './styles';

interface SigninScreenProp extends NavigationInterface {
  testID?: string;
}

export default function SigninScreen(props: SigninScreenProp) {
  return (
    <Container>
      <IconContainer
        onPress={() => props.navigation.goBack()}
        activeOpacity={0.6}
        style={{ alignSelf: 'flex-end', marginRight: 20 }}
      >
        <CancelIcon />
      </IconContainer>
      <ContentArea
        contentContainerStyle={{ flexGrow: 1, alignItems: 'center' }}
      >
        <Button title="Signin screen button" />
        <Welcome>Signin Screen</Welcome>
      </ContentArea>
    </Container>
  );
}
