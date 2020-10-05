import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Screens from '../screens';

const HomeStack = createStackNavigator();

export default function HomeNavigator() {
  return (
    <HomeStack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{ headerShown: false }}
      mode="modal"
    >
      <HomeStack.Screen name="HomeScreen" component={Screens.HomeScreen} />
      <HomeStack.Screen name="SignupScreen" component={Screens.SignupScreen} />
      <HomeStack.Screen name="SigninScreen" component={Screens.SigninScreen} />
    </HomeStack.Navigator>
  );
}
