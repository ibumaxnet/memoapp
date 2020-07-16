import React from 'react';
import { StyleSheet, View } from 'react-native';

import firebase from 'firebase';

import MemoList from '../components/MemoList';
import CircleButton from '../elements/CircleButton';

class MemoListScreen extends React.Component {
  state = {
    memoList: [],
  }

  componentDidMount() {
    const firestore = require('firebase');
    require('firebase/firestore');
    const firestoreDB = firebase.firestore();
    const { currentUser } = firebase.auth();
    const { uid } = currentUser;

    firestoreDB.collection(`users/${uid}/memos`)
      .onSnapshot((snapShot) => {
          const memoListTmp = [];
          snapShot.forEach((doc) => {
            // console.log(`${doc.id} => ${doc.data()}`);
            // console.log(doc.data());
            memoListTmp.push({ ...doc.data(), key: doc.id });
          });
          this.setState({ memoList: memoListTmp });
      })
      // getの場合
      // .get()
      // .then((querySnapshot) => {
      //   const memoListTmp = [];
      //   querySnapshot.forEach((doc) => {
      //     // console.log(`${doc.id} => ${doc.data()}`);
      //     // console.log(doc.data());
      //     memoListTmp.push({ ...doc.data(), key: doc.id });
      //   });
      //   this.setState({ memoList: memoListTmp });
      // })
      // .catch((error) => {
      //   console.log(error);
      // });
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

        <MemoList memoList = {this.state.memoList} navigation={this.props.navigation} />
        <CircleButton
          name="plus"
          onPress={this.handlePressCreate.bind(this)}
        />

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
