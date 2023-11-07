import { createSlice } from '@reduxjs/toolkit';

const currentUserSlice = createSlice({
  name: 'currentUser',
  initialState: null, // Initial state is null
  reducers: {
    setUser: (state, action) => {
      // Update the current user in the state
      return action.payload;
    },
  },
});

export const { setUser } = currentUserSlice.actions;

export default currentUserSlice.reducer;
