import React from 'react';
import {StyleSheet,View,TextInput} from 'react-native';

import CircleButton from '../elements/CircleButton';

import firebase from 'firebase';

class MemoEditScreen extends React.Component {
  state = {
    body:'',
  }

  handlePressSave() {
    const { params } = this.props.navigation.state;
    const uid = params.currentUser.user.uid;

    const firestore = require('firebase');
    require('firebase/firestore');
    const firestoreDB = firebase.firestore();

    firestoreDB.collection(`users/${uid}/memos`).add({
      body: this.state.body,
      createOn: new Date(),
    })
      .then((docRef) => {
        console.log('Document written with ID: ', docRef.id);
      })
      .catch((error) => {
        console.log('DB Error', error);
      });
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          multiline
          style={styles.memoeditinput}
          value={ this.state.body }
          onChangeText = {(text) => {this.setState({ body: text}); }}
        />

        <CircleButton name="check" onPress={ this.handlePressSave.bind(this)} />
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
