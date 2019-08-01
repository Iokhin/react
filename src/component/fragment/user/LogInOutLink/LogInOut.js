import React from "react";
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class LogInOut extends React.Component {

    constructor(props) {
        super(props);

        this.logout = this.logout.bind(this);
    }

    componentDidMount() {

    }

    logout(e) {
        e.preventDefault();
        localStorage.clear();
        // this.props.history.push('/');
        window.location.reload();
    }

    render() {
        if (localStorage.getItem('token')) {
            return (
            <span className="nav-item">
                <Link to="/" onClick={ e => this.logout(e) }>Log out</Link>
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