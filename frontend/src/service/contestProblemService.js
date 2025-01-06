import axios from 'axios'

export const getContestProblems = (id) =>{
    return axios.get(`http://localhost:8080/${id}/contestProblems`)
}

export const getContestProblem = (id) =>{
    return axios.get(`http://localhost:8080/getContestProblem/${id}`)
}

// export const addContestProblem = (contestProblem) =>{
//     return axios.post(`http://localhost:8080/${id}/saveContestProblem`,{
//         title: contestProblem.title,
//         body: contestProblem.body,
//         input: contestProblem.input,
//         output: contestProblem.output
//     })
// }