import React from 'react';
import { View, Text, Image } from 'react-native';
import logo from '../../resources/baby.png';
import style from './Styles';

const Main = () => (
  <View style={style.container}>
    <Image style={style.logo} source={logo} />
    <Text style={style.paragraph}>Toodler A Kanban Project management tool</Text>
  </View>
);

export default Main;
