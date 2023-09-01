import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux'; // Import Provider
import configureStore from 'redux-mock-store';
import Rockets from '../components/Rockets';

const mockStore = configureStore([]);
const initialState = {
  rocket: [
    {
      id: 1,
      name: 'Falcon 9',
      description: 'Sample rocket description',
      flickr_images: ['image-url'],
      reserved: false,
    },
  ],
};
const store = mockStore(initialState);

test('Rockets component matches snapshot', () => {
  const { container } = render(
    <Provider store={store}>
      {' '}
      {/* Wrap with Provider */}
      <Router>
        <Rockets />
      </Router>
    </Provider>,
  );
  expect(container).toMatchSnapshot();
});
