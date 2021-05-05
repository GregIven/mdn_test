import React from 'react';
import FilterButton from './components/FilterButton';
import Form from './components/Form';
import Todo from './components/Todo';

function App({ tasks }) {
  const taskList = tasks.map(task => 
    <Todo name={task.name} completed={task.completed} key={task.id} id={task.id} />);

  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form />
      <div className="filters btn-group stack-exception">
        <FilterButton category="All" />
        <FilterButton />
        <FilterButton />
      </div>
      <h2 id="list-heading">
        3 tasks remaining
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
