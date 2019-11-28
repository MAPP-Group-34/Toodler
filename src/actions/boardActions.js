import * as constants from '../constants';

let nextBoardId = 4;
export const addBoard = (id, name, thumbnailPhoto) => ({
  type: constants.ADD_BOARD,
  id: nextBoardId++,
  payload: { id, name, thumbnailPhoto },
});
