import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  taskItem: {
    marginTop: 20,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#cbd2d9',
  },
  viewContents: {
    flex: 3,
    flexDirection: 'row',
  },
  taskDescription: {
    marginTop: 20,
    width: 1000,
  },
  checkmark: {
    position: 'absolute',
    top: 15,
    right: 15,
    fontSize: 16,
  },
});
