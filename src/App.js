import "./App.css";
import AddTask from "./Components/AddTask/AddTask";
import ListTasks from "./Components/ListTasks/ListTasks";
import axios from 'axios';
import React, { useState, useEffect } from 'react';
function App() {
  const [data, setData]= useState([]);
  useEffect(async () => {
    const result = await axios(
      'https://jsonplaceholder.typicode.com/posts',
    );
     console.log(result.data);
    setData(result.data);
  },[]);
  return (
    <div className="App">
      <h2>To Do Application</h2>
      <AddTask />
      <ListTasks />
      <ul>
      {data.map(item => (
        <li key={item.id}>
          <p>{item.title}</p>
        </li>
      ))}
    </ul>
    </div>
  );
}

export default App;
