import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter as Router, Route, Link } from 'react-router-dom';

import AppHeader from "./component/general/app-header";
import Login from "./component/user/login-form/Login";
import ProjectList from "./component/project/project-list/ProjectList";
import ProjectListItem from "./component/project/project-list-item/ProjectListItem";
import TaskList from "./component/task/task-list/TaskList";
import Register from "./component/user/registration-form/Register";

import './style.css'
import Welcome from "./component/general/welcome/Welcome";

const App = () => {

    return (
        <Router>
            <AppHeader/>
            <Route path="/" exact component={ Welcome }/>
            <Route path="/login" component={ Login }/>
            <Route path="/register" component={ Register }/>
            <Route path="/projects" exact component={ ProjectList }/>
            <Route path="/projects/:id" component={ ProjectListItem }/>
            <Route path="/tasks" exact component={ TaskList }/>
        </Router>
    );
};

ReactDOM.render(<App/>, document.getElementById('root'));