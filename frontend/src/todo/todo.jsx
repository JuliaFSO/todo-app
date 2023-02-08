import React from 'react';

import PageHeader from '../template/pageHeader';
import TodoForm from './todoForm';
import TodoList from './todoList';

const Todo = props => (
  <div>
  <PageHeader name='Tasks' />
  <div  className='content'>
    <TodoForm />
    <TodoList />
  </div>
</div>
)

export default Todo;
