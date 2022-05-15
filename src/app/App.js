import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import { GlobalStyle, theme } from '../style';
import * as S from './App.style';
import Header from '../common/header';
import Footer from '../common/footer';
import Search from '../pages/Search';
import Home from '../pages/Home';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Normalize />
      <GlobalStyle />
      <Header />
      <S.ContentContainer>
        <Routes>
          <Route path="/search/javascript" element={<Search />} />
          <Route path="/terms" element="Terms Page" />
          <Route path="/" element={<Home />} />
        </Routes>
      </S.ContentContainer>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
