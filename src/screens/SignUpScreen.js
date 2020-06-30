import React from 'react';
import {StyleSheet,Text,View,TextInput,TouchableHighlight} from 'react-native';

class SignUpScreen extends React.Component {
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.logintext}>メンバー登録</Text>
        <TextInput style={styles.inputarea} value="Email Adress" />
        <TextInput style={styles.inputarea} value="Password" />
        <TouchableHighlight style={styles.button} title="Send" onPress={() => {}}  underlayColor="#c60666">
          <Text style={styles.buttonttl}>送信</Text>
        </TouchableHighlight>
      </View>


    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    width:'100%',
    padding:24,
  },
  inputarea:{
    height:48,
    backgroundColor:'#dfdfdf',
    marginBottom:16,
    borderWidth:1,
    borderColor:'#b9b9b9',
    padding:8,
  },
  logintext:{
    alignSelf:'center',
    fontSize:24,
    marginBottom:16,
  },
  button:{
    backgroundColor:'#f936c9',
    alignItems:'center',
    justifyContent: 'center',
    height:48,
    borderRadius:6,
    width:'69%',
    alignSelf:'center',
  },
  buttonttl:{
    color:'#fefefe',
    fontSize:18,
  },
});

export default SignUpScreen;
