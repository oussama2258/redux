import React, { useState} from "react";
import { useDispatch } from "react-redux";

// actions
import { addTask } from "../../JS/Actions/listTasks";
// CSS
import { Form, Button } from "react-bootstrap";
import "./AddTask.css";

const AddTask = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  // functions
  const handleChange = (e) => {
    // to prevent the auto reload of the form
    e.preventDefault();

    // if the text different
    //from an empty string dispatch the action
    if (text) {
      dispatch(addTask({ id: Math.random(), text: text, isDone: false }));
      setText("");
    } else {
      alert("cant add an empty task");
    }
  };

  return (
    <Form onSubmit={handleChange} className="add-task-container">
      <Form.Control
        type="text"
        placeholder="Enter task title ..."
        className="input-task"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <Button variant="light" onClick={handleChange}>
        Add
      </Button>
    </Form>
  );
};

export default AddTask;
