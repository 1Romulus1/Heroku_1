import { createSlice } from "@reduxjs/toolkit";

const registSlice = createSlice({
  name: "regist",
  initialState: { isLoggedIn: false },
  reducers: {
    registred(state) {
      state.isRegistred = true;
    },
    unregistred(state) {
      state.isRegistred = false;
    },
  },
});

export const { unregistred, registred } = registSlice.actions;
export default registSlice.reducer;
