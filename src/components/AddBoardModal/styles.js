import { StyleSheet } from 'react-native';
import { pinkish } from '../../styles/colors';

export default StyleSheet.create({
  input: {
    borderColor: pinkish,
    borderWidth: 2,
    width: 200,
    textAlign: 'center',
  },
  icon: {
    fontSize: 60,
    margin: 20,
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
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
  titleText: {
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
  },
});
