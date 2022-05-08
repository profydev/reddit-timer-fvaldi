import { React } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Logo from './img/logo.svg';

const Nav = styled.header`
  padding: 0px 80px;
  display: flex;
  justify-content: space-between;
`;

const MenuLogo = styled.div`
  margin-top: 32px;
`;

const StyledLogo = styled.img`
  display: block;
`;

const RightMenu = styled.div`
  margin-top: 37.5px;
  display: flex;
  justify-content: space-between;
`;

const MenuLink = styled.div`
  margin-left: 26px;
  cursor: pointer;
  a {
    text-decoration: none;
    color: ${(props) => props.theme.color.a};
  }
`;

const Header = () => (
  <Nav>
    <MenuLogo>
      <Link to="/">
        <StyledLogo src={Logo} alt="App Logo" />
      </Link>
    </MenuLogo>

    <RightMenu>
      <MenuLink>
        <Link to="/search/javascript">Search</Link>
      </MenuLink>
      <MenuLink>
        <Link to="/#how-it-works">How it works</Link>
      </MenuLink>
      <MenuLink>
        <Link to="/#about">About</Link>
      </MenuLink>
    </RightMenu>
  </Nav>
);
export default Header;
