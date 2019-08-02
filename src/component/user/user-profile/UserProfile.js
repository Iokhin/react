import React, { useState, useEffect } from "react";
import { Form, Col, Row, Container } from 'react-bootstrap';
import axios from 'axios';

function UserProfile() {

    useEffect(() => {
        fetchItem();
    }, {});

    const [item, setItem] = useState({});

    const fetchItem = async () => {
        const fetchItem = await axios.get(`api/user/findOne?id=${localStorage.getItem('userId')}`,
            {headers: {'Authorization': localStorage.getItem('token')}})
            .then(res => {
                setItem(res.data);
                console.log(res.data);
            });
    };

    return(
        <Container>
            <div id="userDetails">
                <Form>
                    <div className="d-flex justify-content-center">
                        <h3 className="form-signin-heading">PROFILE</h3>
                    </div>
                    <hr/>
                    <Form.Group as={Row} controlId="formPlaintextId">
                        <Form.Label column sm="2">
                            ID
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control plaintext readOnly defaultValue={item.id} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formPlaintextUsername">
                        <Form.Label column sm="2">
                            Username
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control readOnly type="text" value={item.login}/>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formPlaintextEmail">
                        <Form.Label column sm="2">
                            Description
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control readOnly type="text" value={item.email}/>
                        </Col>
                    </Form.Group>
                </Form>
            </div>
        </Container>
    );

}

export default UserProfile;