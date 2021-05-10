import React, { useState } from 'react';
import { nanoid } from "nanoid";
import FilterButton from './components/FilterButton';
import Form from './components/Form';
import Todo from './components/Todo';

function App({ tasks }) {

  const [localTaskList, setLocalTaskList] = useState(tasks);

  const toggleTaskCompleted = (id) => {
    const updatedTask = localTaskList.map(task => {
      if (id === task.id) {
        return {...task, completed: !task.completed}
      }
      return task;
    })
    console.log(updatedTask)
    setLocalTaskList(updatedTask)
  }

  const deleteTask = (id) => {
    const purgedTaskList = localTaskList.filter(task => {
      if (id !== task.id) {
        return task
      }
    })
    setLocalTaskList(purgedTaskList)
  }

  const editTask = (id, newName) => {
    const editedNamedTask = localTaskList.map(task => {
      if (id === task.id) {
        return {...task, name: newName}
      }
      return task
    })
    setLocalTaskList(editedNamedTask)
  }

  const taskList = localTaskList.map(task => 
    <Todo 
      name={task.name} 
      completed={task.completed} 
      key={task.id} 
      id={task.id} 
      toggleTaskCompleted={toggleTaskCompleted}
      editTask={editTask}
      deleteTask={deleteTask}
      />
    );

  const handleTask = (name) => {
    const newTask = {id: "todo-" + nanoid(), name: name, completed: false };
    setLocalTaskList([...localTaskList, newTask])
  }

  const tasksNoun = taskList.length !== 1 ? 'tasks' : 'task';
  const headingText = `${taskList.length} ${tasksNoun} remaining`;

  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form addNameFunc={handleTask} />
      <div className="filters btn-group stack-exception">
        <FilterButton category="All" />
        <FilterButton category="Completed" />
        <FilterButton category="Remaining" />
      </div>
      <h2 id="list-heading">
        {headingText}
      </h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}
      </ul>
    </div>
  );
}

export default App;
