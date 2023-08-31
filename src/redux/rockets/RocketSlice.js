import { createSlice } from '@reduxjs/toolkit';

const rocketSlice = createSlice({
  name: 'rocket',
  initialState: [], // Initial state should be an empty array
  reducers: {
    setRockets: (state, action) => action.payload,
  },
});

export const { setRockets } = rocketSlice.actions;
export default rocketSlice.reducer;
