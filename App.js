import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import MemoList from './src/components/MemoList';
import AppBar from './src/components/AppBar';
import CircleButton from './src/elements/CircleButton'

export default function App() {
  return (
    <View style={styles.container}>

<AppBar />

<MemoList />

<CircleButton>+</CircleButton>

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
