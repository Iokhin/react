import React from 'react';
import ReactDOM from 'react-dom';
import {Button} from "react-bootstrap";
import {projectActions} from "./action/project.action";

import AppHeader from "./component/app-header";
import List from "./component/List";
import './style.css'
import axiosInstance from "./config/AxiosConfig";

const App = () => {

    const todoData = [
        {label: 'asdxx', important: false, id: 1},
        {label: 'QWE', important: true, id: 2},
        {label: 'PPO', important: false, id: 3}
        ];

    const userId = '58607299-b756-4f72-922d-07e3c9f1448d';

    return (
        <div>
            <AppHeader/>
            <div id="ProjectList">
                <List/>
            </div>
            <Button>

            </Button>
        </div>
    );
};

// const el = React.createElement('h1', null, 'HELLO WORLD');

ReactDOM.render(<App/>, document.getElementById('root'));