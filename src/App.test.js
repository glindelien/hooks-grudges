import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  let linkElement = screen.getByText(/Hooks/i);
  expect(linkElement).toBeInTheDocument();
  linkElement = screen.getByText(/Grudges/i);
  expect(linkElement).toBeInTheDocument();
});
