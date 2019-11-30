import { StyleSheet } from 'react-native';
import { purpleish } from '../../styles/colors';

export default StyleSheet.create({
  toolbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
    backgroundColor: purpleish,
  },
  toolbarActionText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 16,
  },
});
