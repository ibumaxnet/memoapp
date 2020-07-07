import React from 'react';
import { StyleSheet,Text,View } from 'react-native';

import MemoList from '../components/MemoList';
import CircleButton from '../elements/CircleButton';

import firebase from 'firebase';
// <CircleButton name="plus" onPress={() => {this.props.navigation.navigate('MemoEdit');}} />

class MemoListScreen extends React.Component {

  handlePressAction() {
    const { params } = this.props.navigation.state;
    // console.log('parametar:', params);
    const uid = params.currentUser.user.uid;
    console.log('UID:', uid);

    const firestore = require('firebase');
    require('firebase/firestore');
    const firestoreDB = firebase.firestore();

    firestoreDB.collection(`users/${uid}/memos`).add({
      body: 'memotitle',
      createOn: '2020-07-07',
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

        <MemoList navigation={this.props.navigation} />
        <CircleButton name="plus" onPress={this.handlePressAction.bind(this)} />

      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a2a2c2',
    width: '100%',
  },

});

export default MemoListScreen;
