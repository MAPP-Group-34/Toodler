import * as constants from '../constants';

let nextTaskId = 1;

export const addTask = (name, description, isFinished, listId) => {
  nextTaskId += 1;
  return {
    type: constants.ADD_TASK,
    id: nextTaskId,
    payload: {
      name, description, isFinished, listId,
    },
  };
};

export const removeTask = (selectedTasks) => ({
  type: constants.REMOVE_TASK,
  payload: selectedTasks,
});

export const updateTask = (taskId, name, description, isFinished, listId) => ({
  type: constants.UPDATE_TASK,
  id: taskId,
  payload: {
    name, description, isFinished, listId,
  },
});
