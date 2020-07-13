import React from 'react';
import {StyleSheet,View,TextInput} from 'react-native';

import CircleButton from '../elements/CircleButton';

import firebase from 'firebase';

class MemoEditScreen extends React.Component {
  state = {
    memoData:{},
  }
  componentDidMount() {
    console.log(this.props.navigation.state);
    const {params} = this.props.navigation.state;
    this.setState({ memoData: params.memo });
  }

  handlePressUpdata() {
    console.log(this.state.memoData);
    const firestore = require('firebase');
    require('firebase/firestore');
    const firestoreDB = firebase.firestore();
    const { currentUser } = firebase.auth();
    const uid = currentUser.uid;

    firestoreDB.collection(`users/${uid}/memos`).doc(this.state.memoData.key)
      .update({
        body: this.state.memoData.body,
        updated: new Date(),
      })
      .then(function() {
        console.log("Document successfully updated!");
      })
      .catch(function(error) {
        console.error("Error updating document: ", error);
      });

  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          multiline
          style={styles.memoeditinput}
          value={this.state.memoData.body}
          onChangeText={(text) => {this.setState({ memoData: { body: text, key: this.state.memoData.key}});}}
        />

        <CircleButton
          name="check"
          onPress={this.handlePressUpdata.bind(this)}
        />
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
