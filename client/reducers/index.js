import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import user from './user';
import flash from './flash';
import remember from './remember';

const rootReducer = combineReducers({
  routing: routerReducer,
  user,
  flash,
  remember
});

export default rootReducer;
