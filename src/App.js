// import logo from './logo.svg';
// import './App.css';
// import SignUp from "./components/SignUp/SignUp";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import SignUpPages from "./pages/SignUpPages/SignUp";
import LoginPages from "./pages/LoginPages/Login";
import HomePage from "./pages/HomePages/HomePage"
import ProtectedRoute from "./components/ProtectedRoute";
// import Login from "./components/Login/Login";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUpPages />} />
        <Route path="/signUp" element={<SignUpPages />} />
        <Route path="/login" element={<LoginPages />} />
        <Route path="/dashboard" element={<ProtectedRoute Component= {HomePage} />} />
        <Route path="/createQuiz" element={<ProtectedRoute Component={HomePage} />}/>  
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
