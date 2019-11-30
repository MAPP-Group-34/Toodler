import update from 'immutability-helper';
import * as constants from '../constants';
import data from '../resources/data.json';

const tasks = (state = data.tasks, action) => {
  let index = -1;
  switch (action.type) {
    case constants.ADD_TASK:
      return [
        ...state,
        {
          id: action.id,
          name: action.payload.name,
          description: action.payload.description,
          isFinished: action.payload.isFinished,
          listId: action.payload.listId,
        },
      ];
    case constants.REMOVE_TASK:
      return state.filter((task) => action.payload.indexOf(task.id) === -1);
    case constants.MOVE_TASK:
      index = state.findIndex((task) => task.id === action.id);
      return update(state, {
        [index]: {
          $set: {
            id: state[index].id,
            name: state[index].name,
            description: state[index].description,
            isFinished: state[index].isFinished,
            listId: action.payload.listId,
          },
        },
      });
    case constants.UPDATE_TASK:
      index = state.findIndex((task) => task.id === action.id);
      return update(state, {
        [index]: {
          $set: {
            id: action.id,
            name: action.payload.name,
            description: action.payload.description,
            isFinished: action.payload.isFinished,
            listId: action.payload.listId,
          },
        },
      });
    default: return state;
  }
};
export default tasks;
