import React from 'react';
import { withNavigation } from 'react-navigation';
import { CheckBox, View, TouchableOpacity, Text } from 'react-native';
import styles from './styles';

const TaskItem = ({
  id, name, isFinished, description,
}) => (
  //<TouchableOpacity>
  //   onLongPress={() => onLongPress(id)}
  //   onPress={() => navigate('TaskDetails', { taskId: id })}
  <View>
    <CheckBox
      style={styles.taskItem}
      center
      iconRight
      iconType="material"
      checkedIcon="clear"
      uncheckedIcon="add"
      checkedColor="red"
      checked={isFinished}
      title={name}
    />
    <Text style={styles.taskItem}>
      {description}
    </Text>
  </View>
  //</TouchableOpacity>
);

export default TaskItem;
