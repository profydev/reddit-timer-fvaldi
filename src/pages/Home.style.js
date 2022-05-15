import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.color.dark};
  font-family: ${(props) => props.theme.font.family.headline};
  font-weight: 400;
`;

export const Text = styled.p`
  color: ${(props) => props.theme.color.text};
`;

export const Button = styled.button`
  text-transform: uppercase;
  border-radius: 4px;
  height: 36px;
  background-color: ${(props) => props.theme.color.orange};
  color: ${(props) => props.theme.color.light};
  border-width: 0px;
  margin-top: 45px;
  margin-bottom: 46px;
  cursor: pointer;
`;

export const Table = styled.img`
  margin-top: 36px;
`;
