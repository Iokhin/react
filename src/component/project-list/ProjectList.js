import React from "react";
import axios from "axios";
import {Table, Button, Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './ProjectList.css';

export default class ProjectList extends React.Component {

    state = {
        projects: [],
        lastOperationSuccess: true
    };

    componentDidMount() {
        this.getData();
    }

    projectRemove = (event, id) => {
        event.preventDefault();
        axios.post(`http://localhost:8080/api/project/removeById`,null,{
            headers: {'Authorization': localStorage.getItem('token')},
            params: {id: id}
        })
            .then(res => {
                this.setState({lastOperationSuccess: res.data.success})
                this.getData();
            });
    };

    getData = () => {
        axios.get(`http://localhost:8080/api/project/findAllByUserId?userId=${localStorage.getItem('userId')}`,
            {headers: {'Authorization': localStorage.getItem('token')}})
            .then(res => {
                this.setState({projects: res.data})
            })
    };

    render() {
        return (
            <div id="ProjectTable">
                <Table bordered hover size="sm">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>DESCRIPTION</th>
                        <th>STATUS</th>
                        <th colSpan={3}>OPTIONS</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.projects.map(project => (
                        <tr key={project.id}>
                            <td><Link to={`/projects/${project.id}`}>{project.id}</Link></td>
                            <td>{project.name}</td>
                            <td>{project.description}</td>
                            <td>{project.status}</td>
                            <td className="option-btn">
                                <button type="submit" className="btn btn-outline-success btn-small">
                                    <i className="fa fa-calendar-check-o"></i>
                                </button>
                            </td>
                            <td className="option-btn">
                                <Link to={`/api/project/removeById?id=${project.id}`}>
                                    <button type="submit" className="btn btn-outline-warning btn-small">
                                        <i className="fa fa-cog"></i>
                                    </button>
                                </Link>
                            </td>
                            <td className="option-btn">
                                <button onClick={(e) => this.projectRemove(e, project.id)} type="submit" className="btn btn-outline-danger btn-small">
                                    <i className="fa fa-trash-o"></i>
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
            </div>
        );
    }
}