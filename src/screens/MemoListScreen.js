import React from 'react';
import { StyleSheet,Text,View } from 'react-native';

import MemoList from '../components/MemoList';
import CircleButton from '../elements/CircleButton';

class MemoListScreen extends React.Component {

  handlePressCreate() {
    const { params } = this.props.navigation.state;
    // console.log('parametar:', params);
    const user = params.currentUser;
    console.log('UID:', user);
    this.props.navigation.navigate('MemoCreate', {currentUser:user});
  }

  render() {
    return (
      <View style={styles.container}>

        <MemoList navigation={this.props.navigation} />
        <CircleButton name="plus" onPress={this.handlePressCreate.bind(this)} />

      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a2a2c2',
    width: '100%',
  },

});

export default MemoListScreen;
