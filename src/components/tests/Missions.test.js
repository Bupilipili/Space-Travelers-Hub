import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Missions from '../Missions';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
}));
const mockStore = configureStore([]);

describe('Missions component', () => {
  test('renders Missions component', () => {
    const store = mockStore({ missions: { missions: [] } });
    render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );
  });

  it('handle join and leave the mission', () => {
    const store = mockStore({ missions: { missions: [] } });
    render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );
  });
});
