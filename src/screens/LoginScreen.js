import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, TouchableOpacity } from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';

import firebase from 'firebase';

class LoginScreen extends React.Component {
  state = {
    email: 'user2@exe.com',
    password: 'password',
  }

handlesubmit_login() {
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        console.log('login Success:');

        // ユーザーデータ渡す場合
        // this.props.navigation.navigate('MemoList', {currentUser:user});

        // スクリーン履歴をリセット
        const resetAction = StackActions.reset({
          index: 0,
          actions: [
              NavigationActions.navigate({ routeName: 'MemoList' }),
          ],
        });
        this.props.navigation.dispatch(resetAction);
      })
      .catch((error) => {
        console.log('Login Error:', this.state.password, error);
      });
}

handlePress_Signup() {
  this.props.navigation.navigate('SignUp');
}
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.logintext}>ログイン</Text>
        <TextInput
          style={styles.inputarea}
          value={this.state.email}
          onChangeText={(text) => {this.setState({ email: text}); }}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Email Address"
        />
        <TextInput
          style={styles.inputarea}
          value={this.state.password}
          onChangeText={(text) => {this.setState({ password: text}); }}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Password"
          secureTextEntry
        />
        <TouchableHighlight style={styles.button} title="Send" onPress={this.handlesubmit_login.bind(this)} underlayColor="#c60666">
          <Text style={styles.buttonttl}>ログインする</Text>
        </TouchableHighlight>
        <TouchableOpacity style={styles.signupbutton} onPress={this.handlePress_Signup.bind(this)}>
          <Text style={styles.signupbutton__text}>メンバー登録する</Text>
        </TouchableOpacity>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    padding: 24,
  },
  inputarea: {
    height: 48,
    backgroundColor: '#dfdfdf',
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#b9b9b9',
    padding: 8,
  },
  logintext: {
    alignSelf: 'center',
    fontSize: 24,
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#f936c9',
    alignItems: 'center',
    justifyContent: 'center',
    height: 48,
    borderRadius: 6,
    width: '69%',
    alignSelf: 'center',
  },
  buttonttl: {
    color: '#fefefe',
    fontSize: 18,
  },
  signupbutton: {
    marginTop: 22,
    alignItems: 'center',
  },
  signupbutton__text: {
    fontSize: 16,
  },
});

export default LoginScreen;
