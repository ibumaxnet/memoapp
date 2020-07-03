import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import MemoListScreen from './src/screens/MemoListScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import MemoDetailScreen from './src/screens/MemoDetailScreen';
import MemoEditScreen from './src/screens/MemoEditScreen';

const AppNavigator = createStackNavigator(
  {
    MemoList: { screen: MemoListScreen },
    MemoDetail: { screen: MemoDetailScreen },
    MemoEdit: { screen: MemoEditScreen },
    Login: { screen: LoginScreen },
    SignUp: { screen: SignUpScreen },
  },
  {
    defaultNavigationOptions: {
      headerTitle: 'Memmapp',
      headerStyle: {
        backgroundColor: '#265666',
      },
      headerTitleStyle: {
        color: '#fefefe',
      },
    },
  },
);

export default createAppContainer(AppNavigator);
