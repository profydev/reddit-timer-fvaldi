import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Search from './pages/search';
import Header from './Header';
import 'normalize.css';
import './styles/global.css';

function App() {
  return (
    <BrowserRouter>
      <div>App Placeholder</div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
