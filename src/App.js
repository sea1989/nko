import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './redux';

import { HomePage } from './pages/home-page'

import DrawerAppBar from './components/DrawerAppBar';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Footer } from './components/Footer/Footer';
import { AboutPage } from './pages/about-page';
import { SupportPage } from './pages/support-page/support-page';
import { RulesPage } from './pages/rules-page/rules-page';
import { SocialPage } from './pages/social-page/social-page';

const theme = createTheme({
  typography: {
    fontFamily: 'Inter',
  },
  palette: {
    primary: {
      main: '#4478FF',
      rose: '#F578B3',
    },
    secondary: {
      main: '#fff',
      darker: '#053e85',
    },
    rose: {
      main: '#F578B3',
      contrastText: '#fff',
    },
    white: {
      main: '#fff',
      contrastText: '#fff',
    },
  },
});

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <DrawerAppBar />
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/about" element={<AboutPage />} />
            <Route exact path="/support" element={<SupportPage />} />
            <Route exact path="/rules" element={<RulesPage />} />
            <Route exact path="/social" element={<SocialPage />} />
          </Routes>
          <Footer />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
