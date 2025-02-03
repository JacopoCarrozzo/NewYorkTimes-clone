import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'; 
import Login from './components/login.tsx';
import Main from './components/main.tsx';
import Details from './components/details.tsx';

const App = () => {
  return (
    <Routes>
      <Route path="/NewYorkTimes-clone" element={<Navigate to="/NewYorkTimes-clone/" replace />} />
      <Route path="/NewYorkTimes-clone/" element={<Main />} />
      <Route path="/NewYorkTimes-clone/login" element={<Login />} />
      <Route path="/NewYorkTimes-clone/details" element={<Details />} />
      <Route path="*" element={<Navigate to="/NewYorkTimes-clone/" replace />} />
    </Routes>
  );
};

export default App;
