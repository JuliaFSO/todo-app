import React from 'react';

import IconButton from '../template/iconButton';

const todoList = props => {
  const renderRows = () => {
    const list = props.list || [];
    return list.map(todo => (
      <tr key={todo._id}>
        <td>{todo.description}</td>
        <td><IconButton style='danger' icon='trash-o' onClick={() => props.handleRemove(todo)} /></td>
      </tr>
    ));
  };

  return (
      <div className=''>
        <table className='table'>
          <thead>
            <tr>
              <th>Description</th>
              <th>Actions</th>
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
