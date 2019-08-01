import React from "react";
import { Redirect } from 'react-router-dom';
import { Button, FormGroup, FormControl, ControlLabel, Form, Col, Row, Container } from "react-bootstrap";

import axiosInstance from "../../config/AxiosConfig";

export default class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            login: '',
            password: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = async event => {
        event.preventDefault();

        try {
            await axiosInstance.post('/auth', {
                username: this.state.login,
                password: this.state.password
            }).then(res => this.setLocalStorage(res));
            // this.props.history.push('/');
            window.location.reload();
        } catch (e) {
            alert(e.message);
        }
    };

    setLocalStorage = async res => {
      localStorage.setItem('token', 'Bearer ' + res.data.token);
      localStorage.setItem('username', res.data.username);
      localStorage.setItem('userId', res.data.userId);
      localStorage.setItem('role', res.data.role);
    };

    render() {
        return (
            <Container>
                <Row className="justify-content-md-center">
                    <Col xs={4}>
                        <div className="loginBox">
                            <form className="form-signin" onSubmit={this.handleSubmit}>
                                <h3 className="form-signin-heading">Please login</h3>
                                <input type="text" className="form-control" name="login" value={this.state.login}
                                       placeholder="Login"
                                       required={true}
                                       onChange={this.handleChange}/>
                                <input type="password" className="form-control" name="password" value={this.state.password}
                                       placeholder="Password"
                                       required={true}
                                       onChange={this.handleChange}/>
                                <button className="btn btn-md btn-primary btn-block" type="submit">Login</button>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
         );
     }
}