import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

import firebase from 'firebase';
import CircleButton from '../elements/CircleButton';

class MemoEditScreen extends React.Component {
  state = {
    memoData: {},
  }

  componentDidMount() {
    // console.log(this.props.navigation.state);
    const { params } = this.props.navigation.state;
    this.setState({ memoData: params.memoItem });
  }

  handlePressUpdata() {
    const upDate = new Date();

    const firestore = require('firebase');
    require('firebase/firestore');
    const firestoreDB = firebase.firestore();
    const { currentUser } = firebase.auth();
    const { uid } = currentUser;

    // console.log(this.state.memoData);

    firestoreDB.collection(`users/${uid}/memos`).doc(this.state.memoData.key)
      .update({
        body: this.state.memoData.body,
        updated: upDate,
      })
      .then(() => {
        // setState でオブジェクト内の項目を追加する
        this.setState(state => (state.memoData.updated = upDate, state))

        const { navigation } = this.props;
        navigation.state.params.returnMemo( {memoItem:this.state.memoData});
        // console.log('Document successfully updated!', this.state.memoData);
        this.props.navigation.goBack();
      })
      .catch((error) => {
        console.error('Error updating document: ', error);
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          multiline
          style={styles.memoeditinput}
          value={this.state.memoData.body}
          // textAlignVertical='top'
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
    textAlignVertical: 'top',
  },
});

export default MemoEditScreen;
