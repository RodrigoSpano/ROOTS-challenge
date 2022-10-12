import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  active: false,
};

export const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    toggleActive: (state, action) => {
      state.active = action.payload;
    },
    toggleToFalse: (state) => {
      state.active = false;
    },
    toggleToTrue: (state) => {
      state.active = true;
    },
  },
});

export const { toggleActive, toggleToFalse, toggleToTrue } = navSlice.actions;

export default navSlice.reducer;
