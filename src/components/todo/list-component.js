import React from "react";
import ListItem from './list-item';

const TodoList = todo => {
  return (
    <div className="list-container">
      {todo.data.map((value, index) => {
        return <ListItem key={index} data={value}/>;
      })}
    </div>
  );
};

export default TodoList;
