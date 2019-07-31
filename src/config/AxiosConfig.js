import axios from 'axios';

// axios.defaults.headers.post['Content-Type'] = 'application/json';

// function getToken() {
//     let token = '';
    // return axios.post('http://localhost:8080/auth', {
    //     username: 'user',
    //     password: 'user'
    // })
    //     .then(res => {res.data});
    // console.log(token);
    // return token
    // return  axios({
    //     method: 'post',
    //     url: 'http://127.99.99.2:8080/api/auth',
    //     data: {
    //         username: 'user',
    //         password: 'user'
    //     }
    // });
// }

// console.log(getToken());

const axiosInstance = axios.create({
    baseURL: '/api',
    timeout: 1000
});
export default axiosInstance;
