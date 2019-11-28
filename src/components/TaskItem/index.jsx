import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from './styles';
import { AntDesign } from '@expo/vector-icons';

const TaskItem = ({
  id, name, isFinished, description, listId, onLongPress, isSelected,
}) => (
  <TouchableOpacity onLongPress={() => onLongPress(id)}>
    {
      isSelected
        ? <AntDesign name="checkcircleo" style={styles.checkmark} />
        : <></>
    }
    <View style={styles.viewContents}>
      <Text>{listId}</Text>
      {isFinished
        ? <Text style={styles.taskItem}>yes</Text>
        : <Text style={styles.taskItem}>no</Text>}
      <Text style={styles.taskItem}>
        {name}
      </Text>
      <Text style={styles.taskDescription}>
        {description}
      </Text>
    </View>
  </TouchableOpacity>
);

TaskItem.propTypes = {
  id: PropTypes.number.isRequired,
  listId: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isFinished: PropTypes.bool.isRequired,
};


export default TaskItem;
