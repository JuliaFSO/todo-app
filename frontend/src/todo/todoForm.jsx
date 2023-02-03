import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Grid from '../template/grid';
import IconButton from '../template/iconButton';

import { changeDescription, search, add, clear } from './todoActions';

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.keyHandler = this.keyHandler.bind(this);
  }

  componentWillMount() {
    this.props.search();
  }

  keyHandler(e) {
    const { add, search, description, clear } = this.props;
    if (e.key === 'Enter') {
      e.shiftKey ? search() : add(description);
    } else if (e.key === 'Escape') {
      clear();
    }
  }
  render() {
    const { add, search, description, clear } = this.props;
    const isEditing = this.props.editingTodo !== null;
    let editingTodo = this.props.editingTodo;

    return (
      <div role='form' className='todoForm'>
        <Grid cols='12 9 10'>
          <input id='description' className='form-control'
          placeholder='Add a task'
          onChange={this.props.changeDescription}
          onKeyUp={this.keyHandler}
          value={ isEditing ? editingTodo.description : this.props.description } />
        </Grid>
        <Grid cols='12 3 2'>
          <IconButton style='primary' icon='plus' onClick={() => add(description, editingTodo, isEditing)} />
          <IconButton style='info' icon='search' onClick={search} />
          <IconButton style='default' icon='close' onClick={() => clear(description)} />
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => ({ description: state.todo.description, editingToDo: state.todo.editingToDo });
const mapDispatchToProps = dispatch =>
      bindActionCreators({ changeDescription, search, add, clear }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
