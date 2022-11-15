import { render, screen } from '@testing-library/react';
import App from './App';

test('Find your best reason ', () => {
  render(<App />);
  const buttonElement  = screen.getByText(/Generate/i);
  expect(buttonElement).toBeInTheDocument();
});
