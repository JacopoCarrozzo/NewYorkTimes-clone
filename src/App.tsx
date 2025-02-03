import React from 'react';
import { Routes, Route } from 'react-router-dom'; 
import Login from './components/login.tsx';
import Main from './components/main.tsx';
import Details from './components/details.tsx';

const App = () => {
  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/' element={<Main />} />
      <Route path='/details' element={<Details />} />
    </Routes>
  );
};

export default App;
