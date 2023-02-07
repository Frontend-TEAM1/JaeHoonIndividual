import {  RouterProvider } from 'react-router-dom';
import { MockPost } from "./__mocks__/post";
import theme from './styles/theme';
import router from './routes/routing';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/global';

function App() {
  

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
export default App;
