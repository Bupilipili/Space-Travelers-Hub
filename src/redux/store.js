import { configureStore } from '@reduxjs/toolkit';
import missionReducer from './missions/MissionSlice';
import rocketReducer from './rockets/RocketSlice';

const store = configureStore({
  reducer: {
    rocket: rocketReducer,
    missions: missionReducer,
  },
});

export default store;
