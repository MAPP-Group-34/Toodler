import { StyleSheet, Dimensions } from 'react-native';

const { width: winWidth } = Dimensions.get('window');

export default StyleSheet.create({
  title: {
    width: winWidth * 0.45,
    height: 60,
    marginLeft: 10,
    marginRight: 10,
    fontSize: 24,
    textAlign: 'center',
  },
  image: {
    width: winWidth * 0.45,
    height: winWidth * 0.45,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
  },
});
