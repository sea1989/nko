import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { HomePage } from './pages/home-page'

import DrawerAppBar from './components/DrawerAppBar';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Inter',
  },
  palette: {
    primary: {
      main: '#4478FF',
      darker: '#053e85',
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

    <BrowserRouter>


      <ThemeProvider theme={theme}>
        <CssBaseline />
        <DrawerAppBar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          {/* <Route exact path="/administration" element={<AdministrationPage />} /> */}
        </Routes>
      </ThemeProvider>
    </BrowserRouter>

  );
}

export default App;
