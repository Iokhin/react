import React from "react";
import axios from "axios";
import { Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './TaskList.css';

export default class TaskList extends React.Component {

    state = {
        tasks: [],
    };

    componentDidMount() {
        this.getData();
    }

    taskRemove = async (event, id) => {
        event.preventDefault();
        await axios.post(`http://localhost:8080/api/task/removeById`,null,{
            headers: {'Authorization': localStorage.getItem('token')},
            params: {id: id}
        })
            .then(res => {
                this.getData();
            });
    };

    taskCreate = async (event) => {
        event.preventDefault();
        await axios.post(`http://localhost:8080/api/task/create`, null, {
            headers: {'Authorization': localStorage.getItem('token')},
            params: {userId: localStorage.getItem('userId')}
        })
            .then(res => {
                this.getData();
            });
    };

    getData = async () => {
        await axios.get(`http://localhost:8080/api/task/findAllByUserId?userId=${localStorage.getItem('userId')}`,
            {headers: {'Authorization': localStorage.getItem('token')}})
            .then(res => {
                this.setState({tasks: res.data})
            })
    };

    render() {
        return (
            <div id="TaskTable">
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
                    {this.state.tasks.map(task => (
                        <tr key={task.id}>
                            <td><Link to={`/tasks/${task.id}`}>{task.id}</Link></td>
                            <td>{task.name}</td>
                            <td>{task.description}</td>
                            <td>{task.status}</td>
                            <td className="option-btn">
                                <button type="submit" className="btn btn-outline-success btn-small">
                                    <i className="fa fa-calendar-check-o"/>
                                </button>
                            </td>
                            <td className="option-btn">
                                <Link to={`/api/task/removeById?id=${task.id}`}>
                                    <button type="submit" className="btn btn-outline-warning btn-small">
                                        <i className="fa fa-cog"/>
                                    </button>
                                </Link>
                            </td>
                            <td className="option-btn">
                                <button onClick={(e) => this.taskRemove(e, task.id)} type="submit"
                                        className="btn btn-outline-danger btn-small">
                                    <i className="fa fa-trash-o"/>
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
                <div className="d-flex justify-content-center">
                    <Button onClick={ e => this.taskCreate(e) }>
                        new task
                    </Button>
                </div>
            </div>
        );
    }
}