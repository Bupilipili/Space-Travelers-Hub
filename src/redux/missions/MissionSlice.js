import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiURL = 'https://api.spacexdata.com/v3/missions';

export const fetchMissions = createAsyncThunk(
  'missions/fetchMissions',
  async (_, thunkAPI) => {
    try {
      const response = await axios(apiURL);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({
        message: 'Something went wrong',
      });
    }
  },
);

const initialState = {
  missions: {},
  isLoading: false,
  error: null,
};

const missionSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMissions.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchMissions.fulfilled, (state, action) => {
        state.isLoading = false;
        state.missions = action.payload;
      })
      .addCase(fetchMissions.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
      });
  },
});

export default missionSlice.reducer;
