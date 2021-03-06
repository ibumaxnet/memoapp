import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Platform } from 'react-native';

import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import MemoListScreen from './src/screens/MemoListScreen';
import MemoCreateScreen from './src/screens/MemoCreateScreen';
import MemoDetailScreen from './src/screens/MemoDetailScreen';
import MemoEditScreen from './src/screens/MemoEditScreen';

import firebase from 'firebase';
import ENV from './env.json';

const firebaseConfig = {
  apiKey: ENV.FIEBASE_API_KEY,
  authDomain: ENV.FIEBASE_AUTH_DOMAIN,
  databaseURL: ENV.FIEBASE_DB_URL,
  projectId: ENV.FIEBASE_PRJ_ID,
  storageBucket: ENV.FIEBASE_STORAGE,
  messagingSenderId: ENV.FIEBASE_MESSAGE_SEND_ID,
  appId: ENV.FIEBASE_APP_ID,
  measurementId: ENV.FIEBASE_MEASURE_ID,
};
firebase.initializeApp(firebaseConfig);

const AppNavigator = createStackNavigator(
  {
    Login: { screen: LoginScreen },
    SignUp: { screen: SignUpScreen },
    MemoList: { screen: MemoListScreen },
    MemoCreate: { screen: MemoCreateScreen },
    MemoDetail: { screen: MemoDetailScreen },
    MemoEdit: { screen: MemoEditScreen },
  },
  {
    defaultNavigationOptions: {
      headerTitle: 'Memmapp',
      headerStyle: {
        backgroundColor: '#265666',
        height: 88,

        ...Platform.select({
          ios: {
            shadowColor: '#010101',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.4,
            shadowRadius: 3,
          },
          android: {
                // backgroundColor: 'red',
            elevation: 4,// andoroid で影
          },
        })

      },
      headerTitleStyle: {
        color: '#fefefe',
        paddingTop: 2,
      },
      headerTintColor: '#fefefe',
      headerBackTitle: null,
    },
  },
);

export default createAppContainer(AppNavigator);
