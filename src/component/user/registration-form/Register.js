import React from "react";
import axios from 'axios';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

export default class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    async handleSubmit(e) {
        e.preventDefault();
        await axios.post('http://localhost:8080/api/user/create', null,{params:
                {
                    username: this.state.username,
                    password: this.state.password
                }
        });
        // this.props.history.push('/');
        window.location.reload();

    }

    render() {
        return (
            <Container id="reg-form">
                <Row className="justify-content-md-center">
                    <Col xs={4}>
                        <Form onSubmit={this.handleSubmit}>
                            <br/>
                            <div className="d-flex justify-content-center">
                            <h3 className="form-signin-heading">Registration</h3>
                            </div>
                            <hr/>
                            <Form.Group as={Row} controlId="formPlaintextUsername">
                                <Form.Label column sm="4">
                                    USERNAME:
                                </Form.Label>
                                <Col sm="8">
                                    <Form.Control type="text" required={true}
                                                  name="username"
                                                  value={ this.state.username }
                                                  onChange={ this.handleChange }/>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="formPlaintextPassword">
                                <Form.Label column sm="4">
                                    PASSWORD:
                                </Form.Label>
                                <Col sm="8">
                                    <Form.Control type="password" required={true}
                                                  name="password"
                                                  value={ this.state.password }
                                                  onChange={ this.handleChange }/>
                                </Col>
                            </Form.Group>
                            <div className="d-flex justify-content-center">
                                <Button size="md" variant="outline-success" type="submit">
                                    Register
                                </Button>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        );
    }
}