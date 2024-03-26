import { Home } from './pages/Home';

import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';

export default function App() {
  return (
    <ThemeProvider
      theme={{
        backgroundColor: '#fff',
        textColor: '#e1e1e6',
      }}
    >
      <Home />
      <GlobalStyle />
    </ThemeProvider>
  );
}
