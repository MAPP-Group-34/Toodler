import * as constants from '../constants';
import data from '../resources/data.json';

const lists = (state = data.lists, action) => {
  switch (action.type) {
    case constants.ADD_LIST:
      return [
        ...state,
        {
          id: action.id,
          name: action.payload.name,
          color: action.payload.color,
          boardId: action.payload.boardId,
        },
      ];
    case constants.REMOVE_LIST:
      return state.filter((list) => action.payload.indexOf(list.id) === -1);
    default: return state;
  }
};
export default lists;
