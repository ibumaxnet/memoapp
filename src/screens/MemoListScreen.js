import React from 'react';
import {StyleSheet,Text,View} from 'react-native';

import MemoList from '../components/MemoList';
import CircleButton from '../elements/CircleButton';

class MemoListScreen extends React.Component {
  render(){
    return(
      <View style={styles.container}>

  <MemoList />
  <CircleButton name="plus" />

      </View>

    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#a2a2c2',
    width:'100%',
  }

});

export default MemoListScreen;
