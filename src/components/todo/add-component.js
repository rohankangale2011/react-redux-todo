import React from "react";

class TodoAdd extends React.Component {
  constructor() {
    super();
    this.state = {
      textVal: ''
    };

    this._updateText = this._updateText.bind(this);
    this._addTodoItem = this._addTodoItem.bind(this);
  }
  _addTodoItem(evt) {
    evt.preventDefault();
    if(this.state.textVal) {
      this.props.addData(this.state.textVal);
      this.setState({
        textVal: ''
      });
    }
  }

  _updateText(e) {
    this.setState({
      textVal: e.target.value
    });
  }
  render() {
    return (
      <div className="todo-add-container">
        <form onSubmit={this._addTodoItem}>
          <input
            type="text"
            onChange={this._updateText}
            value={this.state.textVal}
          />
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}

export default TodoAdd;
