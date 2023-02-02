const INITIAL_STATE = { description: '', list: [] }

const todoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'DESCRIPTION_CHANGED':
      return { ...state, description: action.payload };
    case 'TODO_SEARCHED':
      return { ...state, list: action.payload };
    case 'TODO_ADDED':
    case 'TODO_CLEAR':
      return { ...state, description: '' };
    case 'TODO_MARKED_AS_DONE':
      return { ...state, list: state.list.map(todo => todo._id === action.payload.todo._id ? { ...todo, done: action.payload.done } : todo) };
    case 'TODO_REMOVED':
      return { ...state, list: state.list.filter(todo => todo._id !== action.payload._id) };
    case 'TODO_EDITED':
      return { ...state, description: action.payload.description,
              list: state.list.map(todo => todo._id === action.payload._id ? { ...todo, description: action.payload.description } : todo) };
    default:
      return state;
  }
}

export default todoReducer;
