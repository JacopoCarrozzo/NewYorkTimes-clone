import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'; 
import Login from './components/login.tsx';
import Main from './components/main.tsx';
import Details from './components/details.tsx';
import { Helmet } from 'react-helmet';
import logo from './images/logo.png'

const App = () => {
  return (
    <>
    <Helmet>
        <meta property="og:title" content="New York Times Clone" />
        <meta property="og:description" content="Leggi le notizie più recenti, con articoli e aggiornamenti globali." />
        <meta property="og:image" content={logo}/>
        <meta property="og:url" content="https://jacopoloco.github.io/NewYorkTimes-clone/" />
        <meta property="og:type" content="website" />
        <title>New York Times</title>
      </Helmet>

    <Routes>
      <Route path="/NewYorkTimes-clone" element={<Navigate to="/NewYorkTimes-clone/" replace />} />
      <Route path="/" element={<Main />} />
      <Route path="login" element={<Login />} />
      <Route path="details" element={<Details />} />
      <Route path="*" element={<Navigate to="/NewYorkTimes-clone/" replace />} />
    </Routes>
    </>
  );
};

export default App;
