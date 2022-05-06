import { render, screen } from '@testing-library/react';
import Welcome from '../../../components/home/Welcome';
import React from 'react';

test('renders learn react link', () => {
  render(<Welcome />);
  const linkElement = screen.getByText(/Welcome from REACT/i);
  expect(linkElement).toBeInTheDocument();
});
