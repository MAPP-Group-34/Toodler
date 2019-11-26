import React from 'react';
import { View, Text, Image, TouchableHighlight } from 'react-native';
import logo from '../../resources/baby.png';
import styles from './styles';

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
    <Text> Hi </Text>
    <TouchableHighlight
      style={styles.button}
      onPress={() => { navigate('TaskTest'); }}
    >
      <Text style={styles.buttonText}>TaskTests</Text>
    </TouchableHighlight>
    <Image style={styles.logo} source={logo} />
  </View>
);

export default Main;
