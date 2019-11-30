import { StyleSheet, Dimensions } from 'react-native';

const { width: winWidth } = Dimensions.get('window');

export default StyleSheet.create({
  description: {
    marginLeft: 10,
    marginRight: 10,
    textAlign: 'center',
    fontSize: 12,
  },
  title: {
    marginLeft: 10,
    marginRight: 10,
    textAlign: 'left',
    fontSize: 20,
  },
  textContainer: {
    height: 100,
    width: winWidth - 100,
  },
  itemContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});
