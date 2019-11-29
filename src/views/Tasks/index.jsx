import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Toolbar from '../../components/Toolbar';
import TaskList from '../../components/TaskList';
import AddModal from '../../components/AddTaskModal';
import { addTask, removeTask, updateTask } from '../../actions/taskActions';

class Tasks extends React.Component {
  constructor(props) {
    super(props);
    const { navigation } = this.props;
    const selectedListId = navigation.getParam('selectedListId', -1);
    this.state = {
      selectedListId,
      selectedTasks: [],
      isAddModalOpen: false,
      isEditModalOpen: false,
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

  render() {
    const {
      selectedListId,
      selectedTasks,
      isAddModalOpen,
      isEditModalOpen,
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
        <TaskList
          masterListId={selectedListId}
          selectedTasks={selectedTasks}
          onLongPress={(id) => this.onTaskLongPress(id)}
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
      </View>
    );
  }
}

Tasks.propTypes = {
  addTaskToState: PropTypes.func.isRequired,
  removeTaskFromState: PropTypes.func.isRequired,
  updateTaskState: PropTypes.func.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    getParam: PropTypes.func.isRequired,
  }).isRequired,
};
export default connect(null, {
  addTaskToState: addTask,
  removeTaskFromState: removeTask,
  updateTaskState: updateTask,
})(Tasks);
