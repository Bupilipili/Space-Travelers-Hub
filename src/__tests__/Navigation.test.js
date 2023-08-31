import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
import Navigation from '../components/Navigation'; // Adjust the path

test('Navigation component matches snapshot', () => {
  const { container } = render(
    <Router>
      {' '}
      {/* Wrap your component with the Router */}
      <Navigation />
    </Router>,
  );
  expect(container).toMatchSnapshot();
});
