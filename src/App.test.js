import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Hello world', () => {
  const { getByText } = render(<App />);
  const helloElement = getByText(/Hello world/i);
  expect(helloElement).toBeInTheDocument();
});
