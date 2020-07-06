import React from 'react';
import {StyleSheet,View,TextInput} from 'react-native';

import CircleButton from '../elements/CircleButton';

class MemoEditScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput multiline style={styles.memoeditinput} value="hihi" />

        <CircleButton name="check" onPress={() => {this.props.navigation.goBack()}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  memoeditinput: {
    flex: 1,
    width: '100%',
    color: '#121212',
    backgroundColor: '#fefefe',
    padding: 16,
    paddingTop: 32,
    fontSize: 16,
  },
});

export default MemoEditScreen;
