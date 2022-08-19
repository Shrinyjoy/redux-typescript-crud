import axios from 'axios';

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default ()=>{
    return axios.create({
        baseURL:'https://jsonplaceholder.typicode.com/posts'
    })
}