import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Loading = (props) => {
  const {text, isLoading} = props;
    if( !isLoading ) {
        return null;
    }
  return(
    <View style={styles.container}>
      <Text>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: '#ddd',
    zIndex: 100,
  }
});

export default Loading;
