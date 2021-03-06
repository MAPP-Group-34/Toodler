import { StyleSheet } from 'react-native';
import { pinkish } from '../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: pinkish,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  paragraph: {
    textAlign: 'center',
    color: 'white',
    fontSize: 30,
  },
  button: {
    marginTop: 10,
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
  logo: {
    width: 200,
    height: 200,
  },
});
