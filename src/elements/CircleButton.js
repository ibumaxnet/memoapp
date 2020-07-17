import React from 'react';
import { StyleSheet, View, TouchableHighlight } from 'react-native';
import * as Font from 'expo-font';
import { createIconSet } from '@expo/vector-icons';
// import fontawsome from '../../assets/fonts/fa-solid-900.ttf';

const CustomIcon = createIconSet({
  pencil: '\uf303',
  plus: '\uf067',
  check: '\uf00c',
}, 'FontAwesome',);

class CircleButton extends React.Component {
  state = {
    fontLoaded: false,
  }

  async componentDidMount() {
    await Font.loadAsync({
      'FontAwesome': require('../../assets/fonts/fa-solid-900.ttf'),
       // FontAwesome: fontawsome,
    });
    this.setState({ fontLoaded: true });
  }

  render() {

    const { name, style, color, onPress} = this.props;
    let bgColor = '#f936c9';
    let textColor = '#fefefe';
    if (color === 'white') {
      bgColor = '#fefefe';
      textColor = '#f936c9';
    }
    return (
      <TouchableHighlight onPress={onPress}  style={[styles.Circlebutton,style,{backgroundColor:bgColor}]}>
        <View>
          {
            this.state.fontLoaded ? (
              <CustomIcon
                name={name}
                style={[styles.Circlebutton__ttl, {color:textColor}]}
              />
            ):null
          }
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  Circlebutton: {
    position: 'absolute',
    bottom: 32,
    right: 32,
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#010101',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 4,// andoroid で影
  },
  Circlebutton__ttl: {
    fontSize: 24,
    lineHeight: 26,
    color: '#fefefe',
    fontFamily: 'FontAwesome',
  },

});

export default CircleButton;
