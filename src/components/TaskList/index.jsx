import React from 'react';
import { View, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import TaskItem from '../TaskItem';
import styles from './styles';

const TaskList = ({ tasks, masterListId }) => (
  <View style={styles.listContainer}>
    <FlatList
      numColumns={1}
      data={tasks}
      //extraData={selectedTask}
      renderItem={({ item: { id, name, isFinished, description, listId } }) => {
        return (
          masterListId === listId
            ? (
              <TaskItem
                style={styles.listItem}
                //onLongPress={onLongPress}
                listId={listId}
                description={description}
                isFinished={isFinished}
                name={name}
                id={id}
              />
            )
            : <></>
        );
      }}
      keyExtractor={(task) => task.id}
    />
  </View>
);

TaskList.propTypes = {
  masterListId: PropTypes.number.isRequired,
};

export default TaskList;
