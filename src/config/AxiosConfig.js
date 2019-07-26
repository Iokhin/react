// import axios from 'axios';
//
// // axios.defaults.headers.post['Content-Type'] = 'application/json';
//
// function getToken() {
//     let token = '';
//     // return axios.post('http://localhost:8080/auth', {
//     //     username: 'user',
//     //     password: 'user'
//     // })
//     //     .then(res => {res.data});
//     // console.log(token);
//     // return token
//     return  axios({
//         method: 'post',
//         url: 'http://127.0.0.1:8080/auth',
//         headers: { "Access-Control-Allow-Origin": "*"},
//         data: {
//             username: 'user',
//             password: 'user'
//         }
//     });
// }
//
// console.log(getToken());
//
// // const axiosInstance = axios.create({
// //     baseURL: 'http://localhost:8080/api/',
// //     timeout: 1000,
// //     headers: {'Authorization': 'Bearer ' + getToken()}
// // });
// // export default axiosInstance;
