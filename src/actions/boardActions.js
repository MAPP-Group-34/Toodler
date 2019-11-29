import * as constants from '../constants';

let nextBoardId = 1;
export const addBoard = (name, thumbnailPhoto) => {
  nextBoardId += 1;
  return {
    type: constants.ADD_BOARD,
    id: nextBoardId,
    payload: { name, thumbnailPhoto },
  };
};

export const removeBoard = (selectedBoards) => ({
  type: constants.REMOVE_BOARD,
  payload: selectedBoards,
});
