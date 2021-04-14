import React from "react";
import { useDispatch } from "react-redux";

// actions
import { deleteTask, doneTask } from "../../JS/Actions/listTasks";

// Components
import Edit from "../Edit/Edit";

// CSS
import { Button } from "react-bootstrap";
import "./Task.css";

const Task = ({ task }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <div className="task-card">
        <span className={task.isDone ? "done" : null}>{task.text}</span>
        <Edit task={task} />
        <Button
          variant="outline-primary"
          onClick={() => dispatch(deleteTask(task.id))}
        >
          Delete
        </Button>
        <Button
          variant="outline-primary"
          onClick={() => dispatch(doneTask(task.id))}
        >
          {task.isDone ? "undone" : "done"}
        </Button>
      </div>
    </div>
  );
};

export default Task;
