import React from 'react';
import {StyleSheet,Text,View} from 'react-native';

class CircleButton extends React.Component {
  render(){
    return (
      <View style={styles.Circlebutton}>
        <Text style={styles.Circlebutton__ttl}>
          {this.props.children}
        </Text>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  Circlebutton: {
  position:'absolute',
  bottom:32,
  right:32,
  width:48,
  height:48,
  backgroundColor:'#f936c9',
  borderRadius:24,
  alignItems: 'center',
  justifyContent: 'center',
  shadowColor:'#010101',
  shadowOffset:{width:0,height:0},
  shadowOpacity:0.4,
  shadowRadius:3,
  },
  Circlebutton__ttl: {
  fontSize:24,
  lineHeight:26,
  color:'#fefefe',
  },

});

export default CircleButton;
