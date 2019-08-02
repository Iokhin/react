import React, { useState, useEffect } from "react";
import { Form, Col, Row, Container } from 'react-bootstrap';
import axios from 'axios';

function TaskListItem({match}) {

    useEffect(() => {
        fetchItem();
        console.log(match);
    }, {})

    const [item, setItem] = useState({});

    const fetchItem = async () => {
        const fetchItem = await axios.get(`api/task/findOne?id=${match.params.id}`,
            {headers: {'Authorization': localStorage.getItem('token')}})
            .then(res => {
                setItem(res.data);
                console.log(res.data);
            });
    };

    return (
        <Container>
            <div id="taskDetails">
                <Form>
                    <div className="d-flex justify-content-center">
                        <h3 className="form-signin-heading">TASK DETAILS</h3>
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

                    <Form.Group as={Row} controlId="formPlaintextName">
                        <Form.Label column sm="2">
                            Name
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" readOnly value={item.name}/>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formPlaintextDescription">
                        <Form.Label column sm="2">
                            Description
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" readOnly value={item.description}/>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formPlaintextUserId">
                        <Form.Label column sm="2">
                            User ID
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" readOnly value={item.userId}/>
                        </Col>
                    </Form.Group>
                </Form>
            </div>
        </Container>
    );
}

export default TaskListItem;