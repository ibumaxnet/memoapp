import React from 'react';
import {StyleSheet,Text,View} from 'react-native';
import * as Font from 'expo-font';
import FontAwesome from '../../assets/fonts/fa-solid-900.ttf';
import { createIconSet } from '@expo/vector-icons';

const CustomIcon = createIconSet({
  pencil:'\uf303',
  plus:'\uf067',
  } ,'FontAwesome'
);


class CircleButton extends React.Component {
  state = {
      fontLoaded: false,
  }

  async componentDidMount() {
      await Font.loadAsync({
          FontAwesome: FontAwesome,
      });
      this.setState({ fontLoaded: true });
  }


  render(){
    const {name,style,color} = this.props;
      let bgColor = '#f936c9';
      let textColor = '#fefefe';
      if(color==='white'){
          bgColor ='#fefefe';
          textColor ='#f936c9';
      }
    return (
      <View style={[styles.Circlebutton,style,{backgroundColor:bgColor}]}>
        {
          this.state.fontLoaded ? (
            <CustomIcon name={name} style={[styles.Circlebutton__ttl,style,{color:textColor}]} />
          ):null
        }
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
  fontFamily:'FontAwesome',
  },

});

export default CircleButton;
