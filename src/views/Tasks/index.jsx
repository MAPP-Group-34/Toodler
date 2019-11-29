import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Taskbar from '../../components/TaskBar';
import TaskList from '../../components/TaskList';
import AddModal from '../../components/AddTaskModal';
import EditModal from '../../components/EditTaskModal';
import { addTask, removeTask } from '../../actions/taskActions';

class Tasks extends React.Component {
  constructor(props) {
    super(props);
    const { navigation } = this.props;
    const selectedListId = navigation.getParam('selectedListId', -1);
    this.state = {
      tasks: [],
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
    const { addTask } = this.props;
    addTask(name, description, isFinished, selectedListId);
    this.setState({ isAddModalOpen: false });
  }

  async deleteSelected() {
    const { removeTask } = this.props;
    const { selectedTasks } = this.state;
    removeTask(selectedTasks);
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
  addTask: PropTypes.func.isRequired,
  removeTask: PropTypes.func.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    getParam: PropTypes.func.isRequired,
  }).isRequired,
};
export default connect(null, { addTask, removeTask })(Tasks);
