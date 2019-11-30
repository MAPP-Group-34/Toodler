import React from 'react';
import PropTypes from 'prop-types';
import {
  View, TouchableOpacity, Text,
} from 'react-native';
import { CheckBox } from 'react-native-elements';
import styles from './styles';

const TaskItem = ({
  id, name, description, isFinished, onLongPress, onChangeIsFinished,
}) => (
  <TouchableOpacity
    onLongPress={() => onLongPress(id)}
    onPress={() => onChangeIsFinished(id)}
  >
    <View style={styles.itemContainer}>
      <View style={styles.testContainer}>
        <Text style={styles.title}>
          {name}
        </Text>
        <Text style={styles.description}>
          {description}
        </Text>
      </View>
      <CheckBox
        right
        checked={isFinished}
      />
    </View>
  </TouchableOpacity>
);

TaskItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isFinished: PropTypes.bool.isRequired,
  onLongPress: PropTypes.func.isRequired,
  onChangeIsFinished: PropTypes.func.isRequired,
};


export default TaskItem;
