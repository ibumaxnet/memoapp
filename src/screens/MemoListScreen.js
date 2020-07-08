import React from 'react';
import { StyleSheet,Text,View } from 'react-native';

import MemoList from '../components/MemoList';
import CircleButton from '../elements/CircleButton';

import firebase from 'firebase';

class MemoListScreen extends React.Component {

  componentDidMount() {
    const { currentUser } = firebase.auth();
    // const firestoreDB = firebase.firestore();
    firestoreDB.collection(`users/${uid}/memos`).add({
    console.log('did mount!!:', currentUser);
  }

  handlePressCreate() {
    // ユーザーデータ渡す場合
    // const { params } = this.props.navigation.state;
    // console.log('parameter:', params);
    // const user = params.currentUser;
    // console.log('UID:', params.currentUser.user.email);
    // this.props.navigation.navigate('MemoCreate', {currentUser:user});

    // 画面遷移
    this.props.navigation.navigate('MemoCreate');
  }

  render() {
    return (
      <View style={styles.container}>

        <MemoList navigation={this.props.navigation} />
        <CircleButton name="plus" onPress={this.handlePressCreate.bind(this)} />

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
