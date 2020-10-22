import React from 'react';
import { Avatar, Badge, } from 'react-native-elements';
import { heightPercentageToDP as HP } from 'react-native-responsive-screen';

import Button from '../../components/button';
import UserAvatar from '../../components/presenters/Avatar';
import { useThemeContext } from '../../theme';

import { NavigationInterface } from '../types';
import {
  AvatarContainer,
  Container,
  ContentArea,
  OnlineIcon,
  Text
} from './styles';

interface HomeScreenProp extends NavigationInterface {
  testID?: string;
}

export default function HomeScreen({ navigation }: HomeScreenProp) {
  const { colors } = useThemeContext();

  return (
    <Container>
      <ContentArea
        contentContainerStyle={{ flexGrow: 1, alignItems: 'center', flexDirection: "row", flexWrap: "wrap" }}
      >
        <Text> Text Sample</Text>
        <Button title="button" />
        <Badge
          value={'99+'}
          badgeStyle={{ backgroundColor: colors.BG_PRIMARY_COLOR, margin: HP(2) }}
        />
        <Avatar
          rounded
          source={{
            uri: 'https://bit.ly/2TcUWv4'
          }}
          size="large"
        />

        <AvatarContainer>
          <UserAvatar />
          <OnlineIcon />
          <Text style={[{ marginBottom: HP(2) }]}>Solomon Ogbodo</Text>
        </AvatarContainer>
      </ContentArea>
    </Container>
  );
}
