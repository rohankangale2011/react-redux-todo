import React from 'react';
import TodoAdd from './add-component';
import TodoList from './list-component';
import './todo.css';

class TodoComponent extends React.Component {
    constructor() {
        super();
        this._addTodo = this._addTodo.bind(this);
    }
    _addTodo(data) {
        this.props.addTodoData(data);
    }

    render() {
        return (
            <div className="todo-component">
                <TodoAdd addData={this._addTodo} />
                <TodoList data={this.props.data}/>
            </div>
        )
    }
}

export default TodoComponent;