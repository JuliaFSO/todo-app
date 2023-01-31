import axios from 'axios'

const URL = 'http://localhost:3003/api/todos'

export const changeDescription = (event) => ({
  type: 'DESCRIPTION_CHANGED',
  payload: event.target.value,
})

export const search = () => {
  const request = axios.get(`${URL}?sort=-createdAt`)
  return {
    type: 'TODO_SEARCHED',
    payload: request,
  }
}

export const add = (description) => {
  const request = axios.post(URL, { description })
  return {
  type: 'TODO_ADDED',
  payload: request,
  }
}

export const clear = () => ({
  type: 'TODO_CLEAR',
})

export const markAsDone = (todo, done) => ({
  type: 'TODO_MARKED_AS_DONE',
  payload: { todo, done },
})

export const remove = (todo) => ({
  type: 'TODO_REMOVED',
  payload: todo,
})

export const edit = (todo) => {
  const request = axios.put(`${URL}/${todo._id}`, { description: todo.description })
  return {
    type: 'TODO_EDITED',
    payload: (request, { description: todo.description })
  }
}
