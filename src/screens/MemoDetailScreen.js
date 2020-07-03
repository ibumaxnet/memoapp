import React from 'react';
import {StyleSheet,Text,View} from 'react-native';

import CircleButton from '../elements/CircleButton';

class MemoDetailScreen extends React.Component {
  render() {
    return (
			<View style={styles.container}>
				<View>

					<View style={styles.memoheader}>
						<Text style={styles.memoheaderttl}>なんでやねん</Text>
						<Text style={styles.memoheaderdate}>0000/00/00</Text>
					</View>

          <View style={styles.memocontent}>
						<Text style={styles.memoconenttxt}>なんでやねん</Text>
					</View>

					<CircleButton name="pencil" color="white" onPress={() => {this.props.navigation.navigate('MemoEdit')}}/>
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

  memoheader:{
    justifyContent: 'center',
    backgroundColor:'#223333',
		padding:10,
		height:100,
	},
	memoheaderttl:{
		color:'#fefefe',
		fontSize:20,
		marginBottom:4,
		fontWeight:'bold',
	},
	memoheaderdate: {
		color: '#fefefe',
		fontSize:12,
		marginBottom:4,
	},
	memocontent: {
		flex:1,
		padding:20,
		paddingTop:30,
		paddingBottom:20,
		backgroundColor:'#cecece',
	},
  memoconenttxt: {
		color: '#131313',
	},
});

export default MemoDetailScreen;
