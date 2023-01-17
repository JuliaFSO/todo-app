import React, { Component } from 'react';
import axios from 'axios';

import PageHeader from '../template/pageHeader';
import TodoForm from './todoForm';
import TodoList from './todoList';

const URL = 'http://localhost:3003/api/todos';

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = { description: '', list: [], editingTodo: null };

    this.handleChange = this.handleChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleClear = this.handleClear.bind(this);

    this.handleRemove = this.handleRemove.bind(this);
    this.handleMarkAsDone = this.handleMarkAsDone.bind(this);
    this.handleEdit = this.handleEdit.bind(this);

    this.refresh();
  }

  refresh(description = '') {
    const search = description ? '&description__regex=/' + description + '/' : '';
    axios.get(`${URL}?sort=-createdAt${search}`)
      .then(resp => this.setState({ ...this.state, description, list: resp.data }));
  }

  handleChange(e) {
    if (this.state.editingTodo) {
      this.setState({ editingTodo: { ...this.state.editingTodo, description: e.target.value } });
    } else {
      this.setState({ ...this.state, description: e.target.value });
    }
  }

  handleAdd() {
    if (this.state.editingTodo) {
      const { _id } = this.state.editingTodo;
      const description = this.state.editingTodo.description;
      axios.put(`${URL}/${_id}`, { description })
      .then(resp => this.refresh())
      .then(this.setState({ editingTodo: null }));
    } else {
    const description = this.state.description;
    axios.post(URL, { description })
      .then(resp => this.refresh());
  }}

  handleSearch() {
    this.refresh(this.state.description);
  }

  handleRemove(todo) {
    axios.delete(`${URL}/${todo._id}`)
      .then(resp => this.refresh(this.state.description));
  }

  handleMarkAsDone(todo, newDoneState) {
    axios.put(`${URL}/${todo._id}`, { ...todo, done: newDoneState })
      .then(resp => this.refresh(this.state.description));
  }

  handleEdit(todo) {
    this.setState({
      editingTodo: todo
    });
  }

  handleClear(e) {
    if (this.state.editingTodo) {
      this.setState({ editingTodo: { ...this.state.editingTodo, description: e.target.value } });
      this.refresh();
    } else {
      this.refresh();
    }
  }

  render() {
    return (
      <div>
        <PageHeader name='Tasks' />
        <TodoForm description={this.state.editingTodo ? this.state.editingTodo.description : this.state.description}
            handleChange={this.handleChange}
            handleAdd={this.handleAdd}
            handleSearch={this.handleSearch}
            handleClear={this.handleClear} />
        <TodoList list={this.state.list}
            description={this.state.description}
            handleMarkAsDone={this.handleMarkAsDone}
            handleEdit={this.handleEdit}
            handleRemove={this.handleRemove} />
      </div>
    );
  }
}
