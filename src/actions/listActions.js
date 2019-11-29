import * as constants from '../constants';

let nextListId = 1;
export const addList = (name, color, boardId) => ({
  type: constants.ADD_LIST,
  id: nextListId++,
  payload: { name, color, boardId },
});

export const removeList = (selectedLists) => ({
  type: constants.REMOVE_LIST,
  payload: selectedLists,
});
