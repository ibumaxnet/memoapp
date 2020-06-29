import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import AppBar from './src/components/AppBar';
import MemoEditScreen from './src/screens/MemoEditScreen'

export default function App() {
  return (
    <View style={styles.container}>
<AppBar />
<MemoEditScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop:88,
    backgroundColor: '#fefefe',
  },
});
