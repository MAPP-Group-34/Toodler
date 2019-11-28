import React from 'react';
import { View } from 'react-native';
import Taskbar from '../../components/TaskBar';
import TaskList from '../../components/TaskList';
import data from '../../resources/data.json';
import AddModal from '../../components/AddTaskModal';
import EditModal from '../../components/EditTaskModal';

class Tasks extends React.Component {
  state = {
    tasks: [],
    selectedTasks: [],
    loadingData: false,
    isAddModalOpen: false,
    isEditModalOpen: false,
  }


  onImageLongPress(id) {
    const { selectedTasks } = this.props.state;
    if (selectedTasks.indexOf(id) !== -1) {
      // The image is already within the list
      this.setState({ selectedTasks: selectedTasks.filter((task) => task !== id) });
    } else {
      // Add the new image
      this.setState({ selectedTasks: [...selectedTasks, id] });
    }
  }

  async fetchItems() {
    this.setState({ loadingData: true });
    const tasks = data.tasks;
    this.setState({ loadingData: false, tasks });
  }

  async addBoard(name) {
    const {
      isAddModalOpen,
      tasks,
      id,
      description,
      currentList,
    } = this.state;
    const newId = id + 1;
    const newTask = {
      id: newId,
      name,
      description,
    };
    this.setState({ tasks: [...tasks, newTask], isAddModalOpen: false, id: newId });
  }

  render() {
    const {
      tasks,
      currentList,
      selectedTasks,
      isAddModalOpen,
      isEditModalOpen,
    } = this.state;
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
          masterTaskId={1}
          onLongPress={(id) => this.onBoardLongPress(id)}
        />
        <AddModal
          isOpen={isAddModalOpen}
          onSubmit={ (name, description) => this.addBoard(name) }
          closeModal={() => this.setState({ isAddModalOpen: false })}
        />
        <EditModal
          isOpen={isEditModalOpen}
          closeModal={() => this.setState({ isEditModalOpen: false })}
        />
      </View>
    );
  }
}

export default Tasks;
