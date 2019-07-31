import React from "react";
import {Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class LogInOutLink extends React.Component {

    render() {
        if (localStorage.getItem('token')) {
            return (
            <span className="nav-item">
                <Nav.Link href="#" onClick={() => localStorage.clear()}>Log out</Nav.Link>
            </span>
            );
        }
        return (
            <span className="nav-item">
                <Link to="/login">Log in</Link>
            </span>
        );
    }

}