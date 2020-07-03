import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

class MemoList extends React.Component {
  render() {
    return (

      <View style={ styles.memolist }>

        <TouchableHighlight onPress={() => {this.props.navigation.navigate('MemoDetail');}}>
          <View style={styles.memolist__item}>
            <Text style={styles.memolist__item__ttl}>タイトル</Text>
            <Text style={styles.memolist__item__date}>0000/00/00</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight onPress={() => {this.props.navigation.navigate('MemoDetail');}}>
          <View style={styles.memolist__item}>
            <Text style={styles.memolist__item__ttl}>タイトル</Text>
            <Text style={styles.memolist__item__date}>0000/00/00</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight onPress={() => {this.props.navigation.navigate('MemoDetail');}}>
          <View style={styles.memolist__item}>
            <Text style={styles.memolist__item__ttl}>タイトル</Text>
            <Text style={styles.memolist__item__date}>0000/00/00</Text>
          </View>
        </TouchableHighlight>

        </View>

    );
  }
}

const styles = StyleSheet.create({
  memolist: {
    flex:1,
    width:'100%',
  },
  memolist__item :{
    borderBottomWidth:1,
    borderBottomColor:'#939393',
    backgroundColor:'#efefef',
height:68,
padding:12,
  },
  memolist__item__ttl: {
    fontSize:18,
    color:'#131313',
  },
  memolist__item__date: {
    fontSize:12,
    color:'#363636',
  },
});

export default MemoList;
