import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Home from '../../views/Home';

test('should be able to search for a pokemon', async () => {
  render(<Home />);

  const searchBar = await screen.findByRole('textbox');
  const pokeName = 'blastoise';
  const searchButton = screen.getByRole('button');

  userEvent.type(searchBar, pokeName);
  userEvent.click(searchButton);

  const poke = await screen.findAllByText(pokeName, { exact: false });

  const res = poke.map((item) => item.textContent);

  const handleName = (name) => name.toLowerCase().includes(pokeName);
  const sameName = res.every(handleName);
  expect(sameName).toBe(true);
});
