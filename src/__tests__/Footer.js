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
  return history;
};

test('contains link pointing to profy employers page', () => {
  setup();

  const profyLink = screen.getByRole('link', { name: 'profy.dev' });
  expect(profyLink.getAttribute('href')).toEqual('https://profy.dev/employers');
});

test('navigates to home page when logo is clicked', async () => {
  setup('/search/javascript');

  const logoLink = screen.getByRole('link', { name: /logo-small\.svg/i });
  await userEvent.click(logoLink);

  expect(screen.getByText(/no reactions/i)).toBeInTheDocument();
});

test('navigates to terms page when terms link is clicked', async () => {
  setup('/search/javascript');

  const termsLink = screen.getByRole('link', { name: /terms & privacy/i });
  await userEvent.click(termsLink);

  expect(screen.getByText(/terms page/i)).toBeInTheDocument();
});
