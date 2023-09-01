import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Missions from '../components/Missions';

const mockStore = configureStore([]);

describe('Missions component', () => {
  test('renders Missions component', () => {
    const store = mockStore({ missions: { missions: [] } });
    const { container } = render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );

    expect(container).toMatchSnapshot();
  });

  it('handle join and leave the mission', () => {
    const store = mockStore({ missions: { missions: [] } });
    const { container } = render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );

    expect(container).toMatchSnapshot();
  });
});
