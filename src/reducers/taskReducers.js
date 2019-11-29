import * as constants from '../constants';
import data from '../resources/data.json';

const tasks = (state = data.tasks, action) => {
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
    default: return state;
  }
};
export default tasks;
