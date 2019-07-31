import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter as Router, Route, Link } from 'react-router-dom';

import AppHeader from "./component/app-header";
import Login from "./component/login-form/Login";
import ProjectList from "./component/project-list/ProjectList";
import ProjectListItem from "./component/project-list-item/ProjectListItem";
import './style.css'

const App = () => {

    return (
        <Router>
            <AppHeader/>
            <Route path="/login" component={Login}/>
            <Route path="/projects" exact component={ProjectList}/>
            <Route path="/projects/:id" component={ProjectListItem}/>
        </Router>
    );
};

ReactDOM.render(<App/>, document.getElementById('root'));