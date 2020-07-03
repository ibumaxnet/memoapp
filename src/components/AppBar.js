import React from 'react';
import { StyleSheet,Text,View } from 'react-native';

class AppBar extends React.Component {
  render(){
    return (
      <View style={styles.appbar}>
        <View>
          <Text style={styles.appbar__ttl}>Memot</Text>
        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  appbar:{
    position:'absolute',
    top:0,
    left:0,
    right:0,
    height:88,
    backgroundColor:'#265666',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor:'#010101',
    shadowOffset:{width:0,height:0},
    shadowOpacity:0.4,
    shadowRadius:3,
    zIndex:1,
  },
  appbar__ttl: {
    color:'#fefefe',
    fontSize:24,
    marginTop:40,
  },

});

export default AppBar;
