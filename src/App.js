import React from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';

import { TodoProvider } from './TodoContext';

const App = () => {
  return (

      <TodoProvider>
        <TodoTemplate>
          <TodoHead></TodoHead>
          <TodoList></TodoList>
        </TodoTemplate>
      </TodoProvider>
  
  )
}

export default App