import React from 'react';

import IconButton from '../template/iconButton';

const todoList = props => {
  const renderRows = () => {
    const list = props.list || [];
    return list.map(todo => (
      <tr key={todo._id}>
        <td className={todo.done ? 'markAsDone' : ''}>{todo.description}</td>
        <td className='tdActions'>
          <IconButton style='success' icon='check' onClick={() => props.handleMarkAsDone(todo)} />
          <IconButton style='warning' icon='undo' onClick={() => props.handleMarkAsPending(todo)} />
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
              <th className='tdActions col-md-2 offset-md-2'>Actions</th>
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
