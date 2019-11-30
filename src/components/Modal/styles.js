import { StyleSheet, Dimensions } from 'react-native';

const { width: winWidth } = Dimensions.get('window');

export default StyleSheet.create({
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    width: winWidth - 100,
    backgroundColor: 'white',
    padding: 40,
  },
  divider: {
    marginTop: 20,
    marginBottom: 20,
  },
});
