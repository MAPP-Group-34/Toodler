import React from 'react';
import { withNavigation } from 'react-navigation';
import {
  View, TouchableOpacity, Text,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const ListItem = ({
  id, name, color, boardId, onLongPress, isSelected, navigation: { navigate },
}) => (
  <TouchableOpacity
    onLongPress={() => onLongPress(id)}
  >
    <View style={{ opacity: isSelected ? 0.5 : 1, backgroundColor: color }}>

      <Text style={styles.title}>{id}</Text>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.title}>{color}</Text>
      <Text style={styles.title}>{boardId}</Text>
    </View>
  </TouchableOpacity>
);
ListItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  boardId: PropTypes.number.isRequired,
  onLongPress: PropTypes.func.isRequired,
  isSelected: PropTypes.bool.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
export default withNavigation(ListItem);
