import { combineReducers } from 'redux';
import {eventsReducer} from './eventsReducer';
import {popupReducer} from './popupReducer';

const reducers = combineReducers({
  eventsReducer,
  popupReducer
});

export default reducers;
