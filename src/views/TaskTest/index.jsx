import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import Taskbar from '../../components/TaskBar';
import TaskList from '../../components/TaskList';
import data from '../../resources/data.json';
import AddModal from '../../components/AddTaskModal';
import EditModal from '../../components/EditTaskModal';

class Tasks extends React.Component {
  state = {
    tasks: [],
    selectedTasks: [],
    isAddModalOpen: false,
    isEditModalOpen: false,
    currentList: 1,
  }

  async componentDidMount() {
    const iTasks = data.tasks;
    this.setState({ tasks: iTasks });
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

  getNewId() {
    const { tasks } = this.state;
    const newId = 0;
    const currentTail = tasks.length;
    const lastElement = tasks[currentTail - 1].id;
    if (lastElement > newId) {
      return lastElement + 1;
    }
    return 0;
  }

  async addTask(name, description, isFinished) {
    const {
      tasks,
      currentList,
      isAddModalOpen,
    } = this.state;
    const newId = this.getNewId();
    const newTask = {
      id: newId,
      name,
      description,
      isFinished,
      listId: currentList,
    };
    this.setState({ tasks: [...tasks, newTask], isAddModalOpen: false });
  }

  async deleteSelected() {
    const { selectedTasks, tasks } = this.state;
    this.setState({
      selectedTasks: [],
      // Only retrieve boards which were NOT part of the selected boards list
      tasks: tasks.filter((task) => selectedTasks.indexOf(task.id) === -1),
    });
  }

  async editSelected(name, description, isFinished) {
    await this.addTask(name, description, isFinished);
    await this.deleteSelected();
    this.setState({ isEditModalOpen: false });
  }

  render() {
    const {
      tasks,
      currentList,
      selectedTasks,
      isAddModalOpen,
      isEditModalOpen,
    } = this.state;
    //console.log(this.state);
    return (
      <View style={{ flex: 1 }}>
        <Taskbar
          onAdd={() => this.setState({ isAddModalOpen: true })}
          onRemove={() => this.deleteSelected()}
          onEdit={() => this.setState({ isEditModalOpen: true })}
          hasSelectedElement={selectedTasks.length > 0}
        />
        <TaskList
          tasks={tasks}
          masterListId={currentList}
          selectedTasks={selectedTasks}
          onLongPress={(id) => this.onTaskLongPress(id)}
        />
        <AddModal
          isOpen={isAddModalOpen}
          onSubmit={(name, description, isFinished) => this.addTask(name, description, isFinished)}
          closeModal={() => this.setState({ isAddModalOpen: false })}
        />
        <AddModal
          isOpen={isEditModalOpen}
          onSubmit={(name, description, isFinished) => this.editSelected(name, description, isFinished)}
          closeModal={() => this.setState({ isEditModalOpen: false })}
        />
      </View>
    );
  }
}

Tasks.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    listId: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    isFinished: PropTypes.bool.isRequired,
  })).isRequired,
};
export default Tasks;
