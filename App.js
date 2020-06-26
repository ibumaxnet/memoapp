import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import AppBar from './src/components/AppBar';
import MemoListScreen from './src/screens/MemoListScreen'

export default function App() {
  return (
    <View>
<AppBar />
<MemoListScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a2a2c2',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
