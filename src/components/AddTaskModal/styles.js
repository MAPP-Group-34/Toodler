import { StyleSheet } from 'react-native';
import { graniteGray } from '../../styles/colors';

export default StyleSheet.create({
  icon: {
    fontSize: 60,
    marginTop: 20,
    marginBottom: 20,
  },
  button: {
    marginTop: 30,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderColor: 'white',
    borderWidth: 2,
    backgroundColor: graniteGray,
  },
  buttonText: {
    color: 'white',
  },
  checkbox: {
    width: 30,
    height: 30,
    borderRadius: 5,
    borderWidth: 2,
  },
});
