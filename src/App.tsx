import React from 'react';
import './App.css';
import InputField from './components/inputField';
import TodoList from './components/todoList';
const App: React.FC=()=> {
  return (
    <div className="App">
      <span className='heading'>Taskify</span>
      <InputField/>
      <TodoList/>
    </div>
  );
}

export default App;
