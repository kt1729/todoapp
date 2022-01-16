import React from "react";
import Tasks from "./Tasks";
import './App.css';
import {Paper,TextField,Checkbox,Button} from '@material-ui/core'

class App extends Tasks{
    state = {taskList:[],currentTask: ""};
    render() {
        const {taskList} = this.state;
        return (
            <div className="App flex">
                <Paper elevation={4} className="container">
                    <div className="heading">TODO APP</div>
                    <form onSubmit={this.handleSubmit} className="flex" style={{margin: "15px 0"}}>
                        <TextField
                            variant={"outlined"}
                            size={"small"}
                            style={{width:"80%"}}
                            value={this.state.currentTask}
                            onChange={this.handleChange}
                            placeholder="Add New Item"
                            required={true}
                        />
                        <Button style={{height:"40px"}}
                        color={"primary"}
                        variant ="outlined"
                        type="submit"
                        >Add
                        </Button>
                    </form>
                    <div>
                        {taskList.map((task) => (
                            <Paper key={task._id} className="flex task-container">
                                <Checkbox
                                    checked={task.isDone}
                                    onClick ={() => this.handleUpdate(task._id)}
                                    color="primary"
                                />
                                <div className={task.isDone ? "task line-through" :"task"}>
                                    {task.task}
                                </div>
                                <Button
                                onClick={() => this.handleDelete(task._id)}
                                color ="secondary">
                                    Remove
                                </Button>
                            </Paper>
                        ))}
                    </div>
                </Paper>
            </div>
        )
    }
}
export default App;
