import { ThemeProvider } from 'styled-components'
import { MainContainer } from './components/styles/Container.Styled'
import GlobalStyles from './components/styles/Global.Styled';
import TodoHeader from './components/TodoHeader';
import TodoBody from './components/TodoBody'
const theme = {
  colors: {
    body: '#fff',
  },
  mobile: '768px',
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <MainContainer>
          <TodoHeader />
          <TodoBody />
        </MainContainer>
      </>
    </ThemeProvider>
  );
}

export default App;
