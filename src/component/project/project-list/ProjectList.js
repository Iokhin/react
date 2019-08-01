import React from "react";
import axios from "axios";
import { Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './ProjectList.css';

export default class ProjectList extends React.Component {

    state = {
        projects: [],
    };

    componentDidMount() {
        this.getData();
    }

    projectRemove = async (event, id) => {
        event.preventDefault();
        await axios.post(`http://localhost:8080/api/project/removeById`,null,{
            headers: {'Authorization': localStorage.getItem('token')},
            params: {id: id}
        })
            .then(res => {
                this.getData();
            });
    };

    projectCreate = async (event) => {
        event.preventDefault();
        await axios.post(`http://localhost:8080/api/project/create`, null, {
            headers: {'Authorization': localStorage.getItem('token')},
            params: {userId: localStorage.getItem('userId')}
        })
            .then(res => {
                this.getData();
            });
    };

    getData = async () => {
        await axios.get(`http://localhost:8080/api/project/findAllByUserId?userId=${localStorage.getItem('userId')}`,
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
                                    <i className="fa fa-calendar-check-o"/>
                                </button>
                            </td>
                            <td className="option-btn">
                                <Link to={`/api/project/removeById?id=${project.id}`}>
                                    <button type="submit" className="btn btn-outline-warning btn-small">
                                        <i className="fa fa-cog"/>
                                    </button>
                                </Link>
                            </td>
                            <td className="option-btn">
                                <button onClick={(e) => this.projectRemove(e, project.id)} type="submit"
                                        className="btn btn-outline-danger btn-small">
                                    <i className="fa fa-trash-o"/>
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
                <div className="d-flex justify-content-center">
                    <Button onClick={ e => this.projectCreate(e) }>
                        new project
                    </Button>
                </div>
            </div>
        );
    }
}