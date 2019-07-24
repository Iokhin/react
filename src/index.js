import React from 'react';
import ReactDOM from 'react-dom';


class Project extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.project.id}</td>
                <td>{this.props.project.name}</td>
                <td>{this.props.project.description}</td>
                <td>{this.props.project.status}</td>
            </tr>
        )
    }
}

class ProjectList extends React.Component {

    render() {
        const projects = this.props.projects.map(project =>
            <Project key={project._links.self.href} project={project}/>
        );
        return (
            <table>
                <tbody>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Description</th>
                </tr>
                {projects}
                </tbody>
            </table>
        )
    }

}

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {projects: []};
    }

    componentDidMount() {
        client({method: 'GET', path: '/api/project/findAll'}).done(response => {
            this.setState({projects: response.entity._embedded.employees});
        });
    }

    render() {
        return (
            <ProjectList projects={this.state.projects}/>
        )
    }

}


