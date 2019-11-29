import * as constants from '../constants';

const boards = (state = [], action) => {
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
    default: return state;
  }
};
export default boards;
