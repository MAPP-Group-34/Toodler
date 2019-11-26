import React from 'react';
import {
  View, Text, Image, TouchableHighlight,
} from 'react-native';
import logo from '../../resources/baby.png';
import styles from './Styles';

const Main = ({ navigation: { navigate } }) => (
  <View style={styles.container}>
    <Image style={styles.logo} source={logo} />
    <Text style={styles.paragraph}>Toodler A Kanban Project management tool</Text>
    <TouchableHighlight
      style={styles.button}
      onPress={() => { navigate('Boards'); }}
    >
      <Text style={styles.buttonText}>Boards</Text>
    </TouchableHighlight>
  </View>
);

export default Main;
