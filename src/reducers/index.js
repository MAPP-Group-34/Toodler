import { combineReducers } from 'redux';
import boards from './boardReducer';
import lists from './listReducers';

export default combineReducers({
  boards,
  lists,
});
