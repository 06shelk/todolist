import React from 'react';
import { createGlobalStyle } from 'styled-components';

import { useContext } from "react";
import ThemeContext from "./ThemeContext"; 

import TodoTemplate from './components/TodoTemplate';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';

const GlobalStyle = createGlobalStyle`
    
  body {
      background: #fff;
    }
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead></TodoHead>
        <TodoList></TodoList>
      </TodoTemplate>
    </>
  )
}

export default App