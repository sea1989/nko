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
import { SocialItemPage } from './pages/social-item-page/social-item-page';
import { ContactsPage } from './pages/contacts-page';
import { LoginPage } from './pages/login/login';
import { RegisterPage } from './pages/register-page/register-page';
import { AdvancedSearchPage } from './pages/advanced-search-page/advanced-search-page';
import { NewsPage } from './pages/news-page/news-page';

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
            <Route exact path="/social-details/:id" element={<SocialItemPage />} />
            <Route exact path="/contacts" element={<ContactsPage />} />
            <Route exact path="/login" element={<LoginPage />} />
            <Route exact path="/register" element={<RegisterPage />} />
            <Route exact path="/advanced_search" element={<AdvancedSearchPage />} />
            <Route exact path="/news" element={<NewsPage />} />
            <Route exact path="/news-details/:id" element={<NewsPage />} />
          </Routes>
          <Footer />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
