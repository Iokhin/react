import React, { useState, useEffect } from "react";
import { Form, Col, Row, Container } from 'react-bootstrap';
import axios from 'axios';

function ProjectListItem({match}) {

    useEffect(() => {
        fetchItem();
        console.log(match);
    }, {})

    const [item, setItem] = useState({});

    const fetchItem = async () => {
        const fetchItem = await axios.get(`api/project/findOne?id=${match.params.id}`,
            {headers: {'Authorization': localStorage.getItem('token')}})
            .then(res => {
                setItem(res.data);
                console.log(res.data);
            });
    };

    return (
        <Container>
        <div id="projectDetails">
            <Form>
                <Form.Group as={Row} controlId="formPlaintextEmail">
                    <Form.Label column sm="2">
                        ID
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control plaintext readOnly defaultValue={item.id} />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formPlaintextPassword">
                    <Form.Label column sm="2">
                        Name
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="text" value={item.name}/>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formPlaintextPassword">
                    <Form.Label column sm="2">
                        Description
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="text" value={item.description}/>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formPlaintextPassword">
                    <Form.Label column sm="2">
                        User ID
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="text" value={item.userId}/>
                    </Col>
                </Form.Group>
            </Form>
        </div>
        </Container>
    );
}

export default ProjectListItem;