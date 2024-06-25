import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';

// pages & components
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Navbar from './components/Navbar';
import BMI from './pages/BMI';
import LandingPage from './pages/LandingPage'; // Import the landing page component

function App() {
  const { user } = useAuthContext();

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            {/* Landing Page Route */}
            <Route path="/" element={<LandingPage />} />

            {/* Home Page Route */}
            <Route path="/home" element={user ? <Home /> : <Navigate to="/login" />} />

            {/* Login Page Route */}
            <Route path="/login" element={!user ? <Login /> : <Navigate to="/home" />} />

            {/* Signup Page Route */}
            <Route path="/signup" element={!user ? <Signup /> : <Navigate to="/home" />} />

            {/* BMI Calculator Route */}
            <Route path="/BMI" element={user ? <BMI/> : <Navigate to="/login" />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
