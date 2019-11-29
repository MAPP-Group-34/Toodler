import { StyleSheet } from 'react-native';
import { pinkish } from '../../styles/colors';

export default StyleSheet.create({
  input: {
    borderColor: pinkish,
    borderWidth: 2,
    width: 200,
    margin: 20,
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
    fontSize: 16,
    textAlign: 'center',
  },
});
