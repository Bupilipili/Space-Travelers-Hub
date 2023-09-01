import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Profile from '../components/Profile';

const mockStore = configureStore([]);

test('Profile component matches snapshot', () => {
  const store = mockStore({
    missions: { joinedMissions: [] },
    rocket: [],
  });

  const { container } = render(
    <Provider store={store}>
      <Profile />
    </Provider>
  );

  expect(container).toMatchSnapshot();
});
