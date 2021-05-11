import React, { useState } from 'react';
import { nanoid } from "nanoid";
import FilterButton from './components/FilterButton';
import Form from './components/Form';
import Todo from './components/Todo';

const FILTER_MAP = {
  All: () => true,
  Active: task => !task.completed,
  Completed: task => task.completed
}

const FILTER_NAMES = Object.keys(FILTER_MAP);

console.log(FILTER_NAMES)

function App({ tasks }) {

  const [localTaskList, setLocalTaskList] = useState(tasks);
  const [filter, setFilter] = useState('All');

  const filterList = FILTER_NAMES.map(name => {
    return (
    <FilterButton 
      key={name} 
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
    )
  });

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

  const taskList = localTaskList
  .filter(FILTER_MAP[filter])
  .map(task => 
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
        {filterList}
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
