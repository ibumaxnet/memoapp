import React from 'react';
import {StyleSheet,Text,View} from 'react-native';

class CircleButton extends React.Component {
  render(){
    const {style,color} = this.props;
      let bgColor = '#f936c9';
      let textColor = '#fefefe';
      if(color==='white'){
          bgColor ='#fefefe';
          textColor ='#f936c9';
      }
    return (
      <View style={[styles.Circlebutton,style,{backgroundColor:bgColor}]}>
        <Text style={[styles.Circlebutton__ttl,style,{color:textColor}]}>
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
