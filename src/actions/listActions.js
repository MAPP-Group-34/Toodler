import * as constants from '../constants';

let nextListId = 1;

export const addList = (name, color, boardId) => {
  nextListId += 1;
  return {
    type: constants.ADD_LIST,
    id: nextListId,
    payload: { name, color, boardId },
  };
};

export const removeList = (selectedLists) => ({
  type: constants.REMOVE_LIST,
  payload: selectedLists,
});

export const updateList = (listId, name, color, boardId) => ({
  type: constants.UPDATE_LIST,
  id: listId,
  payload: { name, color, boardId },
});
