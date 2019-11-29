import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Taskbar from '../../components/TaskBar';
import TaskList from '../../components/TaskList';
import AddModal from '../../components/AddTaskModal';
import { addTask, removeTask } from '../../actions/taskActions';

class Tasks extends React.Component {
  constructor(props) {
    super(props);
    const { navigation } = this.props;
    const selectedListId = navigation.getParam('selectedListId', -1);
    this.state = {
      selectedTasks: [],
      isAddModalOpen: false,
      isEditModalOpen: false,
      selectedListId,
    };
  }

  onTaskLongPress(id) {
    const { selectedTasks } = this.state;
    if (selectedTasks.indexOf(id) !== -1) {
      // The image is already within the list
      this.setState({ selectedTasks: selectedTasks.filter((task) => task !== id) });
    } else {
      // Add the new image
      this.setState({ selectedTasks: [...selectedTasks, id] });
    }
  }

  async addTask(name, description, isFinished) {
    const { selectedListId } = this.state;
    const { addTaskToState } = this.props;
    addTaskToState(name, description, isFinished, selectedListId);
    this.setState({ isAddModalOpen: false });
  }

  async deleteSelected() {
    const { removeTaskFromState } = this.props;
    const { selectedTasks } = this.state;
    removeTaskFromState(selectedTasks);
    this.setState({
      selectedTasks: [],
    });
  }

  async editSelected(name, description, isFinished) {
    await this.addTask(name, description, isFinished);
    await this.deleteSelected();
    this.setState({ isEditModalOpen: false });
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
        <Taskbar
          onAdd={() => this.setState({ isAddModalOpen: true })}
          onRemove={() => this.deleteSelected()}
          onEdit={() => this.setState({ isEditModalOpen: true })}
          hasSelectedElement={selectedTasks.length > 0}
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
          ) => this.editSelected(
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
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    getParam: PropTypes.func.isRequired,
  }).isRequired,
};
export default connect(null, { addTaskToState: addTask, removeTaskFromState: removeTask })(Tasks);
