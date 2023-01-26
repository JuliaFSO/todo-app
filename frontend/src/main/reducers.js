import { createStore, combineReducers } from 'redux';

const rootReducer = combineReducers({
  todo: () => ({
    description: 'Start reading a new book',
    list: [{
      _id: 1,
      description: 'Pay the phone bill',
      done: true,
    }, {
      _id: 2,
      description: 'Meeting with the team',
      done: false,
    }, {
      _id: 3,
      description: 'Doctor appointment',
      done: false
    }]
  }),
});

function storeConfig() {
  return createStore(rootReducer);
}

export default storeConfig;
