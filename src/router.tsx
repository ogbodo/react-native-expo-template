import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Screens from './screens';
import { NavigationContainer } from '@react-navigation/native';

const HomeStack = createStackNavigator();

export default function HomeNavigator() {
  return (
    <NavigationContainer>
      <HomeStack.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{ headerShown: false }}
        mode="modal"
      >
        <HomeStack.Screen name="HomeScreen" component={Screens.HomeScreen} />
        <HomeStack.Screen name="SignupScreen" component={Screens.SignupScreen} />
        <HomeStack.Screen name="SigninScreen" component={Screens.SigninScreen} />
      </HomeStack.Navigator>
    </NavigationContainer>
  );
}
