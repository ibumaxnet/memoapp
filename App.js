import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import AppBar from './src/components/AppBar';
import MemoDetailScreen from './src/screens/MemoDetailScreen'

export default function App() {
  return (
    <View style={styles.container}>
<AppBar />
<MemoDetailScreen />
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
