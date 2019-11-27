import React from 'react';
import { View, FlatList } from 'react-native';
import TaskItem from '../TaskItem';
import styles from './styles';

const TaskList = ({ tasks }) => (
  <View style={styles.listContainer}>
    <FlatList
      numColumns={1}
      data={tasks}
      //extraData={selectedTask}
      renderItem={({ item: { id, name, isFinished, description } }) => {
        return (
          <TaskItem
            style={styles.listItem}
            //onLongPress={onLongPress}
            description={description}
            isFinished={isFinished}
            name={name}
            id={id}
          />
        );
      }}
      keyExtractor={(task) => task.id}
    />
  </View>
);

export default TaskList;
