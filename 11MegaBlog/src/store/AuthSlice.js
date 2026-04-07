import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
  uesData: null,
};

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.status = true;
      state.uesData = action.payload.uesData;
    },

    logout: (state) => {
      state.status = false;
      state.uesData = null;
    },
  },
});

export const { login, logout } = AuthSlice.actions;
export default AuthSlice.reducer;
