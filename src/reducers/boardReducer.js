import update from 'immutability-helper';
import * as constants from '../constants';
import data from '../resources/data.json';

const boards = (state = data.boards, action) => {
  let index = -1;
  switch (action.type) {
    case constants.ADD_BOARD:
      return [
        ...state,
        {
          id: action.id,
          name: action.payload.name,
          thumbnailPhoto: action.payload.thumbnailPhoto,
        },
      ];
    case constants.REMOVE_BOARD:
      return state.filter((board) => action.payload.indexOf(board.id) === -1);
    case constants.UPDATE_BOARD:
      index = state.findIndex((board) => board.id === action.id);
      return update(state, {
        [index]: {
          $set: {
            id: action.id,
            name: action.payload.name,
            thumbnailPhoto: action.payload.thumbnailPhoto,
          },
        },
      });
    default: return state;
  }
};
export default boards;
