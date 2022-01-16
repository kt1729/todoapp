import React, {Component} from "react";
import {addTask,getTasks,updateTask,deleteTask} from "./services/taskService";

class Tasks extends Component{

    state = {
        taskList: [],
        currentTask:""
    };

    async componentDidMount(){
        try {
            const {data} = await getTasks();
            this.setState({taskList:data});
        }
        catch (e) {
            console.log("Error while fetching data",e)
        }
    }

    handleChange = ({currentTarget:input}) => {
        this.setState({currentTask:input.value})
    };

    handleSubmit = async  (e) => {
        const currentList = this.state.taskList;
        e.preventDefault();
        try {
            const {data} = await addTask({task:this.state.currentTask});
            const tasks = currentList;
            tasks.push(data);
            this.setState({taskList:tasks,currentTask:""});
        }
        catch (e) {
            console.log("Error while submit",e)
        }
    };

    handleUpdate = async (currentTask) => {
        const currentList = this.state.taskList;
        try {
            const tasks = [...currentList];
            const index = tasks.findIndex((task) => task._id === currentTask);
            tasks[index] = {...tasks[index]};
            tasks[index].isDone = !tasks[index].isDone ;
            this.setState({taskList:tasks});
            await updateTask(currentTask,{isDone:tasks[index].isDone})
        }
        catch (e) {
            this.setState({taskList:currentList});
            console.log("Error while update",e)
        }
    };

    handleDelete = async (currentTask) => {
        const currentList = this.state.taskList;
        try {
            const tasks = currentList.filter ( (task) => task._id !== currentTask);
            this.setState({taskList:tasks});
            await deleteTask(currentTask)
        }
        catch (e) {
            this.setState({taskList:currentList});
            console.log("Error while delete",e)
        }
    }

}

export default Tasks
