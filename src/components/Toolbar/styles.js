import { StyleSheet } from 'react-native';
import { purpleish } from '../../styles/colors';

export default StyleSheet.create({
  toolbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    backgroundColor: purpleish,
  },
  toolbarAction: {
    flex: 1,
    alignItems: 'center',
  },
  toolbarActionText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 16,
  },
});
