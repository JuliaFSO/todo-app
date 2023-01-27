import { createStore, combineReducers } from 'redux';
import todoReducer from '../todo/todoReducer';

const rootReducer = combineReducers({
  todo: todoReducer
});

function storeConfig() {
  return createStore(rootReducer);
}

export default storeConfig;
