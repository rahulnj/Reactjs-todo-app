import React, { useState, useEffect } from "react"
import { ThemeProvider } from 'styled-components'
import { MainContainer } from './components/styles/Container.Styled'
import GlobalStyles from './components/styles/Global.Styled';
import TodoHeader from './components/TodoHeader';
import TodoBody from './components/TodoBody';
import TodoList from './components/TodoList';

const theme = {
  colors: {
    body: '#fff',
  },
  mobile: '768px',
}

function App() {


  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState('all')
  const [filteredTodos, setFilteredTodos] = useState([])

  //Runonce
  useEffect(() => {
    getLocalTodos();
  }, [])


  //useEffect
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status])


  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }
  //save to local
  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  const getLocalTodos = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem("todos", JSON.stringify([]))
    } else {
      let todoLocal = JSON.parse(localStorage.getItem('todos'));
      setTodos(todoLocal);
    }
  }


  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <MainContainer>
          <TodoHeader />
          <TodoBody todos={todos}
            setTodos={setTodos}
            inputText={inputText}
            setInputText={setInputText}
            setStatus={setStatus}
          />

          <TodoList setTodos={setTodos}
            todos={todos}
            filteredTodos={filteredTodos}
          />
        </MainContainer>
      </>
    </ThemeProvider>
  );
}

export default App;
