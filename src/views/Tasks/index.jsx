import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Toolbar from '../../components/Toolbar';
import TaskList from '../../components/TaskList';
import AddModal from '../../components/AddTaskModal';
import Header from '../../components/Header';
import MoveTasks from '../../components/MoveTasksButton';
import MoveModal from '../../components/MoveModal';

import {
  addTask, removeTask, updateTask, moveTask, updateIsFinished,
} from '../../actions/taskActions';

class Tasks extends React.Component {
  constructor(props) {
    super(props);
    const { navigation } = this.props;
    const selectedListId = navigation.getParam('selectedListId', -1);
    const color = navigation.getParam('backgroundColor', -1);
    this.state = {
      selectedListId,
      color,
      selectedTasks: [],
      isAddModalOpen: false,
      isEditModalOpen: false,
      isMoveModalOpen: false,
    };
  }

  onTaskLongPress(id) {
    const { selectedTasks } = this.state;
    if (selectedTasks.indexOf(id) !== -1) {
      this.setState({ selectedTasks: selectedTasks.filter((task) => task !== id) });
    } else {
      this.setState({ selectedTasks: [...selectedTasks, id] });
    }
  }

  async updateIsFinished(taskId) {
    const { updateIsFinishedState } = this.props;
    updateIsFinishedState(taskId);
  }

  async addTask(name, description, isFinished) {
    const { selectedListId } = this.state;
    const { addTaskToState } = this.props;
    addTaskToState(name, description, isFinished, selectedListId);
    this.setState({ isAddModalOpen: false });
  }

  async deleteSelectedTasks() {
    const { removeTaskFromState } = this.props;
    const { selectedTasks } = this.state;
    removeTaskFromState(selectedTasks);
    this.setState({
      selectedTasks: [],
    });
  }

  async editSelectedTasks(name, description, isFinished) {
    const { selectedListId, selectedTasks } = this.state;
    const { updateTaskState } = this.props;
    updateTaskState(selectedTasks[0], name, description, isFinished, selectedListId);
    this.setState({
      isEditModalOpen: false,
      selectedTasks: [],
    });
  }

  async moveSelectedTasks(newListId) {
    const { selectedTasks } = this.state;
    const { moveTaskState } = this.props;
    // let i;
    // for (i = 0; i < selectedTasks.length; i + 1) {
    //   moveTaskState(selectedTasks[i], newListId);
    // }
    moveTaskState(selectedTasks[0], newListId);
    this.setState({
      isMoveModalOpen: false,
      selectedTasks: [],
    });
  }

  render() {
    const {
      selectedListId,
      selectedTasks,
      isAddModalOpen,
      isEditModalOpen,
      isMoveModalOpen,
      color,
    } = this.state;
    // console.log(this.state);
    return (
      <View style={{ flex: 1 }}>
        <Toolbar
          onAdd={() => this.setState({ isAddModalOpen: true })}
          onRemove={() => this.deleteSelectedTasks()}
          onEdit={() => this.setState({ isEditModalOpen: true })}
          hasSelected={selectedTasks.length > 0}
          hasSelectedOne={selectedTasks.length === 1}
        />
        <Header
          title="Tasks"
        />
        <TaskList
          masterListId={selectedListId}
          color={color}
          selectedTasks={selectedTasks}
          onLongPress={(id) => this.onTaskLongPress(id)}
          onChangeIsFinished={(id) => this.updateIsFinished(id)}
        />
        <AddModal
          isOpen={isAddModalOpen}
          onSubmit={(
            name,
            description,
            isFinished,
          ) => this.addTask(
            name,
            description,
            isFinished,
          )}
          closeModal={() => this.setState({ isAddModalOpen: false })}
        />
        <AddModal
          isOpen={isEditModalOpen}
          onSubmit={(
            name,
            description,
            isFinished,
          ) => this.editSelectedTasks(
            name,
            description,
            isFinished,
          )}
          closeModal={() => this.setState({ isEditModalOpen: false })}
        />
        <MoveModal
          isOpen={isMoveModalOpen}
          onSubmit={(newListId) => this.moveSelectedTasks(newListId)}
          closeModal={() => this.setState({ isMoveModalOpen: false })}
        />
        <MoveTasks
          hasSelected={selectedTasks.length > 0}
          onMove={() => this.setState({ isMoveModalOpen: true })}
        />
      </View>
    );
  }
}

Tasks.propTypes = {
  addTaskToState: PropTypes.func.isRequired,
  removeTaskFromState: PropTypes.func.isRequired,
  updateTaskState: PropTypes.func.isRequired,
  moveTaskState: PropTypes.func.isRequired,
  updateIsFinishedState: PropTypes.func.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    getParam: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(null, {
  updateIsFinishedState: updateIsFinished,
  addTaskToState: addTask,
  removeTaskFromState: removeTask,
  updateTaskState: updateTask,
  moveTaskState: moveTask,
})(Tasks);
