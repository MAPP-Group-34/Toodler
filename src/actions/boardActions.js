import * as constants from '../constants';

let nextBoardId = 3;
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

export const updateBoard = (boardId, name, thumbnailPhoto) => ({
  type: constants.UPDATE_BOARD,
  id: boardId,
  payload: { name, thumbnailPhoto },
});
