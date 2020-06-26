import React from 'react';
import {StyleSheet,Text,View} from 'react-native';

class MemoList extends React.Component {
  render(){
    return (

<View style={styles.memolist}>

  <View style={styles.memolist__item}>
    <Text style={styles.memolist__item__ttl}>タイトル</Text>
    <Text style={styles.memolist__item__date}>0000/00/00</Text>
  </View>

  <View style={styles.memolist__item}>
    <Text style={styles.memolist__item__ttl}>タイトル</Text>
    <Text style={styles.memolist__item__date}>0000/00/00</Text>
  </View>

  <View style={styles.memolist__item}>
    <Text style={styles.memolist__item__ttl}>タイトル</Text>
    <Text style={styles.memolist__item__date}>0000/00/00</Text>
  </View>

  <View style={styles.memolist__item}>
    <Text style={styles.memolist__item__ttl}>タイトル</Text>
    <Text style={styles.memolist__item__date}>0000/00/00</Text>
  </View>

  <View style={styles.memolist__item}>
    <Text style={styles.memolist__item__ttl}>タイトル</Text>
    <Text style={styles.memolist__item__date}>0000/00/00</Text>
  </View>

</View>

    );
  }
}

const styles = StyleSheet.create({
  memolist: {
    flex:1,
    width:'100%',
    paddingTop:88,
  },
  memolist__item :{
    borderBottomWidth:1,
    borderBottomColor:'#939393',
    backgroundColor:'#efefef',
height:60,
padding:12,
  },
  memolist__item__ttl: {
    fontSize:18,
    color:'#131313',
  },
  memolist__item__date: {
    fontSize:12,
    color:'#363636',
    paddingTop:4,
  },
});

export default MemoList;
