import { createSlice } from '@reduxjs/toolkit';


export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: 0
  },
  reducers: {
    login: (state, action) => {
      state.user = 1;
    },
    logout: (state, action) => {
      state.user -= 1;
    }
  },
});
export const selectUser = (state) => state.user.user;

export const { login, logout } = userSlice.actions

export default userSlice.reducer;
