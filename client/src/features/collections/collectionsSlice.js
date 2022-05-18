import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  collections: [],
  status: null,
  error: null,
};

export const fetchCollections = createAsyncThunk(
  "collections/fetchCollections",
  async () => {
    const res = await axios.get("/api/collections");
    return res.data;
  }
);

export const fetchUserCollections = createAsyncThunk(
  "collections/fetchUserCollections",
  async (id) => {
    const res = await axios.get(`/api/collections/${id}`);
    return res.data;
  }
);

export const createNewCollection = createAsyncThunk(
  "collections/createNewCollection",
  async (userId, { rejectWithValue, dispatch }) => {
    const res = await axios.post(`/api/collections/${userId}/create`);
    const data = await res.data;
    dispatch(createCollection(data));
  }
);

const collectionsSlice = createSlice({
  name: "collections",
  initialState,
  reducers: {
    createCollection: {
      reducer(state, action) {
        state.collections.push(action.payload);
      },
      prepare() {
        return {
          payload: {},
        };
      },
    },
    updateCollection: {},
    deleteCollection: {},
  },
  extraReducers: {},
});

const { createCollection, updateCollection, deleteCollection } =
  collectionsSlice.actions;

export default collectionsSlice.reducer;
