import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, FlatList } from 'react-native';

const dateString = (date) => {
  if (date == null) { return ''; }
  const dateObject = date.toDate();
  return dateObject.toISOString().split('T')[0];
};

class MemoList extends React.Component {

  renderMemo({ item }) {
    // console.log(item);
    return(
      <TouchableHighlight onPress={() => {this.props.navigation.navigate('MemoDetail', { memo: item });}}>
        <View style={styles.memolist__item}>
          <Text style={styles.memolist__item__ttl}>{item.body ? item.body.substring(0, 10) : ''}</Text>
          <Text style={styles.memolist__item__date}>{dateString(item.createOn)}</Text>
        </View>
      </TouchableHighlight>
    );
  }

  render() {
    // console.log(this.props.memoList);
    return (
      <View style={styles.memolist }>
        <FlatList data={this.props.memoList} renderItem={this.renderMemo.bind(this)} />

      </View>

    );
  }
}

const styles = StyleSheet.create({
  memolist: {
    flex: 1,
    width: '100%',
  },
  memolist__item: {
    borderBottomWidth: 1,
    borderBottomColor: '#939393',
    backgroundColor: '#efefef',
    height: 68,
    padding: 12,
  },
  memolist__item__ttl: {
    fontSize: 18,
    color: '#131313',
  },
  memolist__item__date: {
    fontSize: 12,
    color: '#363636',
  },
});

export default MemoList;
