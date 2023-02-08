import axios from 'axios'

const URL = 'http://localhost:3003/api/todos'

export const changeDescription = (event) => ({
  type: 'DESCRIPTION_CHANGED',
  payload: event.target.value,
})

export const search = () => {
  return (dispatch, getState) => {
    const description = getState().todo.description;
    const search = description ? `&description__regex=/${description}/` : '';
    const request = axios.get(`${URL}?sort=-createdAt${search}`)
      .then(resp => dispatch({ type: 'TODO_SEARCHED', payload: resp.data }));
  }
}

export const add = (todo, description) => {
  return (dispatch) => {
    if (todo._id) {
      axios.put(`${URL}/${todo._id}`, {...todo, description })
        .then(resp => dispatch({ type: 'TODO_UPDATED', payload: resp.data }))
    } else {
      axios.post(URL, { description })
        .then(resp => dispatch(clear()))
    }
  };
};

export const clear = () => {
  return [{type: 'TODO_CLEAR'}, search()]
}

export const markAsDone = (todo, done) => {
  return dispatch => {
    axios.put(`${URL}/${todo._id}`, { ...todo, done })
      .then(resp => dispatch({ type: 'TODO_MARKED_AS_DONE', payload: { todo, done } }))
      .then(resp => dispatch(search()))
  }
}

export const remove = (todo) => {
  return dispatch => {
    axios.delete(`${URL}/${todo._id}`)
      .then(resp => dispatch(search()))
  }
}

export const edit = (todo, description) => {
  return dispatch => {
    axios.put(`${URL}/${todo._id}`, { ...todo, description })
      .then(resp => dispatch({ type: 'TODO_EDITED', payload: resp.data }))
  }
}

export const update = (todo, description) => {
  return dispatch => {
    axios.put(`${URL}/${todo._id}`, {...todo, description })
      .then(resp => dispatch({ type: 'TODO_UPDATE', payload: resp.data }))
      .then(resp => dispatch(clear()))
  }
}
