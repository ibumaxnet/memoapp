import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.appbar}>
        <View>
          <Text style={styles.appbar__ttl}>Memot</Text>
        </View>
      </View>

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

      <View style={styles.addbutton}>
        <Text style={styles.addbutton__ttl}>+</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a2a2c2',
    alignItems: 'center',
    justifyContent: 'center',
  },
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
  addbutton: {
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
zIndex:1,
  },
  addbutton__ttl: {
fontSize:24,
lineHeight:26,
color:'#fefefe',
  },
});
