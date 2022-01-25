import { screen, render } from '@testing-library/react';
import Home from './Home';

test('Should render the Home page', async () => {
  render(<Home />);

  const pokeList = await screen.findAllByRole('listitem');
  expect(pokeList).toHaveLength(20);

  const heading = screen.getByRole('heading');
  expect(heading).toBeInTheDocument();

  const textBox = screen.getByRole('textbox');
  expect(textBox).toBeInTheDocument();

  const searchBtn = screen.getByRole('button');
  expect(searchBtn).toBeInTheDocument();
});
