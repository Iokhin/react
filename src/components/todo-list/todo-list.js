import React from "react";

import TodoListItem from "../todo-list-item/todo-list-item";
import './todo-list.css';

const TodoList = ({todoData}) => {

    const elements = todoData.map((item) => {

        const {id, ...otherProps} = item;

        return (
            <li key={id}>
                <TodoListItem {...otherProps} />
            </li>
        );
    });

    return (
        <ul className="list-group todo-list">
            {elements}
        </ul>
    );
};

export default TodoList;