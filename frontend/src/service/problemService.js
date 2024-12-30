import axios from 'axios'

export const getProblems = () =>{
    return axios.get("http://localhost:8080/problems")
}

export const addProblem = (problem) =>{
    return axios.post(`http://localhost:8080/save`,{
        title: problem.title,
        body: problem.body,
        input: problem.input,
        output: problem.output
    })
}