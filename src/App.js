import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import GlobalStyle from './GlobalStyle';
import theme from './theme';
import Header from './Header';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Normalize />
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/search" element="search" />
          <Route path="/" element="home" />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
