import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Please Enter the text you want to encrypt/i);
  expect(linkElement).toBeInTheDocument();
});
