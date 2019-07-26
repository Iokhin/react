import axios from 'axios';

export const projectActions = {
    create
};

async function create(project) {
    await axios.post('http://localhost:8080/api/project/create', {project})
        .then(res => {
        console.log(res);
    })
}