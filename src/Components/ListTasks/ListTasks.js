import React, { useState } from "react";
import { useSelector } from "react-redux";

// components
import Task from "../Task/Task";

// CSS
import { Button } from "react-bootstrap";

const ListTasks = () => {
  // hooks
  const [status, setstatus] = useState("all");
  // get the listtasks from the task reducer
  const listtasks = useSelector((state) => state.task.listTasks);

  return (
    <div>
      {/* 3buttons pour le filtrage */}
      <Button variant="outline-primary" onClick={() => setstatus("all")}>
        All
      </Button>
      <Button variant="outline-primary" onClick={() => setstatus("done")}>
        Done
      </Button>
      <Button variant="outline-primary" onClick={() => setstatus("undone")}>
        Undone
      </Button>

      {/* affichage selon la condition */}
      {status == "done"
        ? listtasks
            .filter((el) => el.isDone == true)
            .map((el) => <Task task={el} key={el.id} />)
        : status == "undone"
        ? listtasks
            .filter((el) => el.isDone == false)
            .map((el) => <Task task={el} key={el.id} />)
        : listtasks.map((el) => <Task task={el} key={el.id} />)}
    </div>
  );
};

export default ListTasks;
