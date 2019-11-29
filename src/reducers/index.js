import { combineReducers } from 'redux';
import boards from './boardReducer';
import lists from './listReducers';
import tasks from './taskReducers';

export default combineReducers({
  boards,
  lists,
  tasks,
});
