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
  description: {
    marginLeft: 10,
    marginRight: 10,
    textAlign: 'center',
    fontSize: 12,
  },
  checkmark: {
    position: 'absolute',
    top: 15,
    right: 15,
    fontSize: 16,
  },
  title: {
    marginLeft: 10,
    marginRight: 10,
    textAlign: 'left',
    fontSize: 20,
  },
  textContainer: {
    height: 100,
  },
  itemContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});
