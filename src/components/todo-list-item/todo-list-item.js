import React from 'react';

const TodoListItem = ({label, important = false}) => {
    
    const style = {
        color: important ? 'tomato' : 'black'
    };
    
    return <span className="list-group-item todo-list-item" style={style}>{label}</span>;
};

export default TodoListItem;