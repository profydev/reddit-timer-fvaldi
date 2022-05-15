import React from 'react';
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import App from '../app';

const setup = (initialPath = '/') => {
  const history = createMemoryHistory();
  render(
    <HistoryRouter
      location={history.location}
      history={history}
      initialEntries={[initialPath]}
    >
      <App />
    </HistoryRouter>,
  );

  return { history };
};

test('navigates to home page when logo is clicked', async () => {
  setup('/search/javascript');

  const logoLink = screen.getByRole('link', { name: /logo\.svg/i });
  await userEvent.click(logoLink);

  expect(screen.getByText(/no reactions/i)).toBeInTheDocument();
});

test('navigates to search page when search link is clicked', async () => {
  const { history } = setup();

  const searchLink = screen.getByRole('link', { name: /search/i });
  await userEvent.click(searchLink);

  expect(screen.getByText(/search page/i)).toBeInTheDocument();
  expect(history.location.pathname).toEqual('/search/javascript');
});

test.each`
  link              | hash
  ${'About'}        | ${'#about'}
  ${'How it works'} | ${'#how-it-works'}
`(
  'navigates to "$link" section when "$link" link is clicked',
  async ({ link, hash }) => {
    const { history } = setup('/search/javascript');

    const hashLink = screen.getByRole('link', { name: link });
    await userEvent.click(hashLink);

    expect(screen.getByText(/no reactions/i)).toBeInTheDocument();
    expect(history.location.hash).toEqual(hash);
  },
);
