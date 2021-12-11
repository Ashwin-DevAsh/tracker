import './App.scss';
import { Routes, Route, Link,Navigate } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material';

import Signup from './Pages/Registeration/Signup';
import Login from './Pages/Registeration/Login';
import Otp from './Pages/Registeration/Otp';
import Home from './Pages/Home/Home';
import AuthService from './Services/AuthService';

const authService = new AuthService()

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
          <Route path="/otpVerification" element={<Otp />} />
          <Route path="/*" element={<Home />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
