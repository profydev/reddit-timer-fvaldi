import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './Home.style';

const home = () => (
  <S.Container>
    <S.Title>No reactions to your reddit posts?</S.Title>
    <S.Text>
      Great timing, great results! Find the best time to post on your subreddit.
    </S.Text>
    <Link to="/search/javascript">
      <S.Button>show me the best time</S.Button>
    </Link>
    <S.Text>/r/javascript</S.Text>
    <Link to="/search/javascript">
      <S.Table src="/table.png" />
    </Link>
  </S.Container>
);

export default home;
