import React from 'react';
import { withNavigation } from 'react-navigation';
import {
  View, TouchableOpacity, Text,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
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

export default withNavigation(ListItem);
