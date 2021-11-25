import React, { useState } from "react"
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
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <MainContainer>
          <TodoHeader />
          <TodoBody todos={todos}
            setTodos={setTodos}
            inputText={inputText}
            setInputText={setInputText} />
          <TodoList todos={todos} />
        </MainContainer>
      </>
    </ThemeProvider>
  );
}

export default App;
