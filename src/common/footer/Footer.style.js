import styled from 'styled-components';
import { Link as UnstyledLink } from 'react-router-dom';
import { ReactComponent as UnstyledLogo } from './logo.svg';

export const Container = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 0 80px;
`;

export const Logo = styled(UnstyledLogo)``;

export const Link = styled(UnstyledLink)`
  text-decoration: none;
  color: ${(props) => props.theme.color.midDark};
`;

export const a = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.color.midDark};
`;
