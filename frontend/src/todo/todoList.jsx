import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import IconButton from '../template/iconButton';

import { markAsDone, remove, edit } from './todoActions';

const todoList = props => {
  const renderRows = () => {
    const list = props.list || [];
    return list.map(todo => (
      <tr key={todo._id}>
        <td className={todo.done ? 'markAsDone' : ''}>{todo.description}</td>
        <td>
          <IconButton style='success' icon='check' onClick={() => props.markAsDone(todo, !todo.done)} />
          <IconButton style='warning' icon='edit' onClick={() => props.edit(todo)}  />
          <IconButton style='danger' icon='trash-o' onClick={() => props.remove(todo)} />
        </td>
      </tr>
    ));
  };

  return (
      <div>
        <table className='table tableList'>
          <thead>
            <tr>
              <th className=''><h3>Tasks descriptions</h3></th>
              <th className='todoActions'><h3>Actions</h3></th>
            </tr>
          </thead>
          <tbody>
            {renderRows()}
          </tbody>
        </table>
      </div>
  );
};

const mapStateToProps = state => ({ list: state.todo.list });
const mapDispatchToProps = dispatch =>
      bindActionCreators({ markAsDone, remove, edit }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(todoList);
