const INITIAL_STATE = { description: '', list: [], editingTodo: undefined };

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
      return { ...state, description: action.payload.description, editingTodo: action.payload };
    case 'TODO_UPDATED':
      return { ...state, description: action.payload.description, editingTodo: undefined };
    default:
      return state;
  }
};

export default todoReducer;
