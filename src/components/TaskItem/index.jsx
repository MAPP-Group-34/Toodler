import React from 'react';
import PropTypes from 'prop-types';
import {
  View, TouchableOpacity, Text,
} from 'react-native';
import { CheckBox } from 'react-native-elements';
import { AntDesign } from '@expo/vector-icons';
import styles from './styles';

const TaskItem = ({
  id, name, description, isFinished, onLongPress, isSelected, onChangeIsFinished,
}) => (
  <TouchableOpacity onLongPress={() => onLongPress(id)}>
    {
        isSelected
          ? <AntDesign name="checkcircleo" style={styles.checkmark} />
          : <></>
      }
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
        onIconPress={() => onChangeIsFinished(id)}
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
  isSelected: PropTypes.bool.isRequired,
};


export default TaskItem;
