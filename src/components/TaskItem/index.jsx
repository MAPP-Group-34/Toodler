import React from 'react';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';
import { CheckBox, View, TouchableOpacity, Text } from 'react-native';
import styles from './styles';

const TaskItem = ({
  id, name, isFinished, description, listId,
}) => (
  //<TouchableOpacity>
  //   onLongPress={() => onLongPress(id)}
  //   onPress={() => navigate('TaskDetails', { taskId: id })}
  <View style={styles.viewContents}>
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
  //</TouchableOpacity>
);

TaskItem.propTypes = {
  id: PropTypes.number.isRequired,
  listid: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isFinished: PropTypes.bool.isRequired
};


export default TaskItem;
