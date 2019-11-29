import React from 'react';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TaskItem from '../TaskItem';
import styles from './styles';

const TaskList = ({
  tasks,
  masterListId,
  onLongPress,
  selectedTasks,
}) => (
  <View style={styles.listContainer}>
    <FlatList
      numColumns={1}
      data={tasks}
      extraData={selectedTasks}
      renderItem={({
        item: {
          id,
          name,
          isFinished,
          description,
          listId,
        },
      }) => (
        masterListId === listId
          ? (
            <TaskItem
              isSelected={selectedTasks.indexOf(id) !== -1}
              onLongPress={onLongPress}
              listId={listId}
              description={description}
              isFinished={isFinished}
              name={name}
              id={id}
            />
          )
          : <></>
      )}
      keyExtractor={(task) => task.id.toString()}
    />
  </View>
);

const mapStateToProps = (state) => ({
  tasks: state.tasks,
});

TaskList.propTypes = {
  masterListId: PropTypes.number.isRequired,
  tasks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    listId: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    isFinished: PropTypes.bool.isRequired,
  })).isRequired,
  onLongPress: PropTypes.func.isRequired,
  selectedTasks: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default connect(mapStateToProps)(TaskList);
