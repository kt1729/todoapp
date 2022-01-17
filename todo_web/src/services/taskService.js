import axios from "axios";
// const apiURL =  'http://localhost:8081/api/tasks';
const apiURL =  'https://todo.sampleapps.dev/api/tasks';

export function getTasks () {
    return axios.get(apiURL);
}


export function addTask (task) {
    return axios.post(apiURL,task);
}

export function updateTask (taskId, task) {
    return axios.put(`${apiURL}/${taskId}`,task);
}

export function deleteTask (taskId) {
    return axios.delete(`${apiURL}/${taskId}`);
}

