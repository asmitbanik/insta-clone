// Main App component
import React from 'react';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';

const App = () => {
  return (
    <AuthProvider>
      <Navbar />
      <Home />
    </AuthProvider>
  );
};

export default App;
