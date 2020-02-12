import axios from 'axios';

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        baseURL: 'localhost:2019/api',
        headers:{
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        }
    })
}
export const axiosWithoutAuth = () => {
  
    return axios.create({
        baseURL: 'https://eduforall.herokuapp.com/api',
        headers:{
            'Content-Type': 'application/json',
        }
    })
}