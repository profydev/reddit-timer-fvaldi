import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './Footer.style';

function Footer() {
  return (
    <S.Container>
      <S.a href="https://profy.dev/employers">profy.dev</S.a>
      <Link to="/">
        <S.Logo />
      </Link>
      <S.Link to="/terms">Terms & Privacy</S.Link>
    </S.Container>
  );
}

export default Footer;
