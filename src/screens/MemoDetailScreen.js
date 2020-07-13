import React from 'react';
import {StyleSheet,Text,View} from 'react-native';

import CircleButton from '../elements/CircleButton';

// FirebaseのTimestampを一般的な日付文字列にする関数
const dateString = (date) => {
  // 存在しない場合は空文字列を返すと安全です
  if (date == null) { return ''; }
  // firebaseのTimestamp型をDate型に変換する
  const dateObject = date.toDate();
  // Dateオブジェクトを文字列に変換する
  return dateObject.toISOString().split('T')[0];
};

class MemoDetailScreen extends React.Component {
  state = {
    memoItem: {},
  }

  componentDidMount() {
    const { params } = this.props.navigation.state;
    this.setState({ memoItem: params.memo });
    // console.log('memoItem:', params);
  }

  render() {
    const { memoItem } = this.state;
    if (memoItem == null) { return null; }

    return (
      <View style={styles.container}>
				<View>

					<View style={styles.memoheader}>
						<Text style={styles.memoheaderttl}>{memoItem.body ? memoItem.body.substring(0, 10) : ''}</Text>
						<Text style={styles.memoheaderdate}>{dateString(memoItem.createOn)}</Text>
					</View>

          <View style={styles.memocontent}>
						<Text style={styles.memoconenttxt}>{memoItem.body}</Text>
					</View>

					<CircleButton
            name="pencil"
            style={styles.editbutton}
            color="white"
            onPress={() => {this.props.navigation.navigate('MemoEdit', { memo:memoItem });}}
          />
				</View>

			</View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },

  memoheader: {
    justifyContent: 'center',
    backgroundColor: '#223333',
    padding: 10,
    height: 100,
  },
  memoheaderttl: {
    color: '#fefefe',
    fontSize: 20,
    marginBottom: 4,
    fontWeight: 'bold',
  },
  memoheaderdate: {
    color: '#fefefe',
    fontSize: 12,
    marginBottom: 4,
  },
  memocontent: {
    paddingTop: 30,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    backgroundColor: '#dfdfdf',
    // flex: 1,
  },
  memoconenttxt: {
    lineHeight: 22,
    fontSize: 15,
  },
  editbutton: {
    top: 68,
  },
});

export default MemoDetailScreen;
