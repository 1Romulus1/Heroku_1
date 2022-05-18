import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../features/auth/authSlice';
import usersReducer from '../features/users/usersSlice'
import collectionsReducer from '../features/collections/collectionsSlice'
import registReducer from '../features/auth/registSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    users: usersReducer,
    collections: collectionsReducer,
    regist: registReducer,
  },
});
