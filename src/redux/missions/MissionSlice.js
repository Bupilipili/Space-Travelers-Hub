import { createSlice } from '@reduxjs/toolkit';

const missionSlice = createSlice({
  name: 'mission',
  initialState: 
  { missions: [],
  joinedMissions: [],
  loading: false,
  error: null,
  },

  reducers: {
    // setMissions: (state, action) => {
    //   state.missions = action.payload;
    // },
    joinMission: (state, action) => {
      const missionId = action.payload;
      state.missions = state.missions.map((mission) => (mission.mission_id === missionId
        ? { ...mission, reserved: true }
        : mission));
    },
    leaveMission: (state, action) => {
      const missionId = action.payload;
      state.missions = state.missions.map((mission) => (mission.mission_id === missionId
        ? { ...mission, reserved: false }
        : mission));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMissions.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMissions.fulfilled, (state, action) => {
        state.loading = false;
        state.missions = action.payload;
      })
      .addCase(fetchMissions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setMissions, joinMission, leaveMission } = missionSlice.actions;
export default missionSlice.reducer;
