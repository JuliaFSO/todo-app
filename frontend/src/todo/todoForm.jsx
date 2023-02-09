import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Grid from '../template/grid';
import IconButton from '../template/iconButton';

import { changeDescription, search, add, clear, edit, update } from './todoActions';

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.keyHandler = this.keyHandler.bind(this);
  }

  componentWillMount() {
    this.props.search();
  }

  keyHandler(e) {
    const { add, search, description, clear, update } = this.props;
    const editingTodo = this.props.editingTodo;
    if (e.key === 'Enter') {
      if (e.shiftKey) {
        search();
      } else {
        if (editingTodo) {
          update(editingTodo, description);
        } else {
          add(description);
        }
      }
    } else if (e.key === 'Escape') {
      clear();
    }
  }

  render() {
    const { add, search, description, clear, update } = this.props;
    const editingTodo = this.props.editingTodo;

    return (
      <div role='form' className='todoForm'>
        <Grid cols='12 9 10'>
          <input id='description' className='form-control'
          placeholder='Add a task'
          onChange={this.props.changeDescription}
          onKeyUp={this.keyHandler}
          value={ description }
          />
        </Grid>
        <Grid cols='12 3 2'>
          <IconButton style='primary' icon='plus' onClick={() => { editingTodo !== undefined ? update(editingTodo, description) : add(description) }} />
          <IconButton style='info' icon='search' onClick={search} />
          <IconButton style='default' icon='close' onClick={() => clear(description)} />
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => ({ description: state.todo.description, editingTodo: state.todo.editingTodo });
const mapDispatchToProps = dispatch =>
      bindActionCreators({ changeDescription, search, add, clear, edit, update }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
