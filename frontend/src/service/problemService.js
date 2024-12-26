import axios from 'axios'

export const getProblems = () =>{
    return axios.get("http://localhost:8080/problems")
}