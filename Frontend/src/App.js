import './App.scss';
import Login from './Pages/registeration/login';
import { Routes, Route, Link } from "react-router-dom";

import { ThemeProvider, createTheme } from '@mui/material';
import Signup from './Pages/registeration/signup';


const theme = createTheme({
  palette: {
    primary: {
      main: '#1c6b91'
    }
  }
});


function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
