import React from 'react';

import IconButton from '../template/iconButton';

const todoList = props => {
  const renderRows = () => {
    const list = props.list || [];
    return list.map(todo => (
      <tr key={todo._id}>
        <td className={todo.done ? 'markAsDone' : ''}>{todo.description}</td>
        <td>
          <IconButton style='success' icon='check' onClick={() => props.handleMarkAsDone(todo, !todo.done)} />
          <IconButton style='warning' icon='edit' onClick={() => props.handleEdit(todo)}  />
          <IconButton style='danger' icon='trash-o' onClick={() => props.handleRemove(todo)} />
        </td>
      </tr>
    ));
  };

  return (
      <div>
        <table className='table'>
          <thead>
            <tr>
              <th className=''>Description</th>
              <th className='todoActions'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {renderRows()}
          </tbody>
        </table>
      </div>
  );
};

export default todoList;
