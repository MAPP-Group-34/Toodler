import { StyleSheet } from 'react-native';
import { pinkish } from './colors';

export default StyleSheet.create({
  textInput: {
    borderColor: pinkish,
    borderWidth: 2,
    width: 200,
    textAlign: 'center',
  },
  button: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderColor: 'white',
    borderWidth: 2,
    backgroundColor: pinkish,
  },
  buttonText: {
    color: 'white',
  },
  modalTitleText: {
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
  },
});
