import React from 'react';
import ReactDOM from 'react-dom';

import TodoList from "./components/todo-list/todo-list";
import SearchPanel from "./components/search-panel";
import AppHeader from "./components/app-header";

const App = () => {

    const todoData = [
        {label: 'asdxx', important: false, id: 1},
        {label: 'QWE', important: true, id: 2},
        {label: 'PPO', important: false, id: 3}
        ];

    return (
        <div>
            <AppHeader/>
            {/*<SearchPanel/>*/}
            {/*<TodoList todoData={todoData}/>*/}
        </div>
    );
};

// const el = React.createElement('h1', null, 'HELLO WORLD');

ReactDOM.render(<App/>, document.getElementById('root'));