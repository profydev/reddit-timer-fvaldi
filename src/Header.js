import { React } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Logo from './img/logo.svg';

const Nav = styled.header`
  padding: 30px 80px;
  display: flex;
  justify-content: space-between;
`;

const RightMenu = styled.header`
  margin-top: 0.5rem;
  display: flex;
  justify-content: space-between;
`;

const MenuLink = styled.div`
  margin-left: 1.6rem;
  cursor: pointer;
  a {
    text-decoration: none;
    color: ${(props) => props.theme.color.a};
  }
`;

const Header = () => (
  <Nav>
    <Link to="/">
      <img src={Logo} alt="App Logo" />
    </Link>

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
