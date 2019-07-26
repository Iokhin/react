import React from "react";
import axios from "axios";
import {Table, Button} from 'react-bootstrap';

export default class List extends React.Component {

    state = {
        projects: []
    };

    componentDidMount() {
        axios.get("http://localhost:8080/api/project/findAll")
            .then(res => {
                this.setState({projects: res.data})
            })
    }

    render() {
        return (
            <Table bordered hover size="sm">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>DESCRIPTION</th>
                    <th>STATUS</th>
                </tr>
                </thead>
                <tbody>
                {this.state.projects.map(project => (
                    <tr key={project.id}>
                        <td>{project.id}</td>
                        <td>{project.name}</td>
                        <td>{project.description}</td>
                        <td>{project.status}</td>
                    </tr>
                ))}
                </tbody>
            </Table>
        );
    }
}