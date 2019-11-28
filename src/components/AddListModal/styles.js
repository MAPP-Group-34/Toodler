import { StyleSheet } from 'react-native';
import { pinkish } from '../../styles/colors';

export default StyleSheet.create({
  input: {
    borderColor: pinkish,
    borderWidth: 2,
    width: 200,
    textAlign: 'center',
  },
  button: {
    borderColor: 'white',
    borderWidth: 2,
    backgroundColor: pinkish,
  },
  buttonText: {
    color: 'white',
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
  },
});
