import {createSlice} from '@reduxjs/toolkit'
// import axios from 'axios' createAsynckThunk

const usersSlice = createSlice({
  name: 'users',
  initialState: [],
  reducers: {}
})

export const selectAllUsers = (state) => state.users
export default usersSlice.reducer
