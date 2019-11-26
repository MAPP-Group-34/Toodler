import React from 'react';
import { View, Text } from 'react-native';
import Toolbar from '../../components/Toolbar';

class Boards extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Toolbar />
      </View>
    );
  }
}

export default Boards;
