import React from "react";
import logo from './tm-symbol.jpg';
import {Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LogInOut from "../../user/log-in-out/LogInOut";

export default class AppHeader extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light color">
                <Link className="navbar-brand" to="/"><img src={logo} width="40" height="40"/></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
                        aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto nav-tabs">
                        {localStorage.getItem('token') &&
                            <li className="nav-item">
                                <Link className="nav-link" to="/profile">Profile<span
                                    className="sr-only">(current)</span></Link>
                            </li>
                        }
                        {localStorage.getItem('token') &&
                            <li className="nav-item">
                                <Link to="/projects" className="nav-link">
                                     Projects
                                </Link>
                            </li>
                        }
                        {localStorage.getItem('token') &&
                            <li className="nav-item">
                                <Link className="nav-link" to="/tasks">
                                    Tasks
                                </Link>
                            </li>
                        }
                    </ul>
                    <LogInOut/>
                    <span className="nav-item">
                    <Link className="nav-link" to="/register">Register</Link>
                  </span>
                </div>
            </nav>
        );
    }

}


