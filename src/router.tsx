import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList
} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Constants from 'expo-constants';

import HomeNavigator from './navigator/HomeNavigator';
import { useThemeContext } from './theme';
import Button from './components/button';

const Drawer = createDrawerNavigator();

export default function AppNavigator() {
  const { colors, fonts } = useThemeContext();

  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="HomeNavigator"
        drawerContentOptions={{
          style: { marginTop: Constants.statusBarHeight },
          activeTintColor: colors.BG_PRIMARY_COLOR,
          labelStyle: { textTransform: 'uppercase' }
        }}
        drawerContent={props => {
          return (
            <DrawerContentScrollView {...props}>
              <DrawerItemList {...props} />
              <Button
                title="signin button"
                onPress={() => props.navigation.navigate('SigninScreen')}
                textStyle={{
                  textTransform: 'capitalize',
                  fontSize: fonts.MEDIUM_SIZE
                }}
                buttonStyle={{ marginTop: 40, marginLeft: 10, width: '80%' }}
              />
              <Button
                title="signup button"
                onPress={() => props.navigation.navigate('SignupScreen')}
                textStyle={{
                  textTransform: 'capitalize',
                  fontSize: fonts.MEDIUM_SIZE
                }}
                buttonStyle={{ marginTop: 40, marginLeft: 10, width: '80%' }}
              />
            </DrawerContentScrollView>
          );
        }}
      >
        <Drawer.Screen name="home" component={HomeNavigator} />
        <Drawer.Screen name="menu1" component={HomeNavigator} />
        <Drawer.Screen name="meu2" component={HomeNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
