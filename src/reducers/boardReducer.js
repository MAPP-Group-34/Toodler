import * as constants from '../constants';

const boards = (state = [], action) => {
  switch (action.type) {
    case constants.ADD_BOARD:

      console.log(action);
      return [
        ...state,
        {
          id: action.id,
          name: action.payload.name,
          thumbnailPhoto: action.payload.thumbnailPhoto,
        },
      ];
    default: return state;
  }
};
export default boards;
