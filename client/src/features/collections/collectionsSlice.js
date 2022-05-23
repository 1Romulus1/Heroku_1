import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  collections: [],
  status: null,
  error: null,
};

export const fetchCollections = createAsyncThunk(
  "collections/fetchCollections",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get("/api/collections");
      return res.data;
    } catch (error) {
      return rejectWithValue(error.res.data);
    }
  }
);

export const fetchUserCollections = createAsyncThunk(
  "collections/fetchUserCollections",
  async (id, { rejectWithValue }) => {
    try {
      const res = await axios.get(`/api/collections/${id}`);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.res.data);
    }
  }
);

export const createCollection = createAsyncThunk(
  "collections/createCollection",
  async (collectionData, { rejectWithValue }) => {
    try {
      const res = await axios.post("/api/collections/create", collectionData);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.res.date);
    }
  }
);

export const updateCollection = createAsyncThunk(
  "collections/updateCollection",
  async ({ id, updatedCollectionData }, { rejectWithValue }) => {
    try {
      const res = await axios.post(`/api/collections/${id}`, updateCollection);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.res.data);
    }
  }
);

export const deleteCollection = createAsyncThunk(
  "collections/deleteCollection",
  async ({ id }, { rejectWithValue }) => {
    try {
      const res = await axios.delete(`/api/collections/${id}`);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.res.data);
    }
  }
);

const collectionsSlice = createSlice({
  name: "collections",
  initialState,
  extraReducers: {
    [fetchCollections.pending]: (state) => {
      state.status = true;
    },
    [fetchCollections.fulfilled]: (state, action) => {
      state.status = false;
      state.collections = action.payload;
    },
    [fetchCollections.rejected]: (state, action) => {
      state.status = false;
      state.error = action.payload.message;
    },
    [createCollection.pending]: (state) => {
      state.status = true;
    },
    [createCollection.fulfilled]: (state, action) => {
      state.status = false;
      state.collections = action.payload;
    },
    [createCollection.rejected]: (state, action) => {
      state.status = false;
      state.error = action.payload.message;
    },
    [fetchUserCollections.pending]: (state) => {
      state.status = true;
    },
    [fetchUserCollections.fulfilled]: (state, action) => {
      state.status = false;
      state.collections = action.payload;
    },
    [fetchUserCollections.rejected]: (state, action) => {
      state.status = false;
      state.error = action.payload.message;
    },
    [updateCollection.pending]: (state) => {
      state.status = true;
    },
    [updateCollection.fulfilled]: (state, action) => {
      state.status = false;
      state.collections = action.payload;
    },
    [updateCollection.rejected]: (state, action) => {
      state.status = false;
      state.error = action.payload.message;
    },
    [deleteCollection.pending]: (state) => {
      state.status = true;
    },
    [deleteCollection.fulfilled]: (state, action) => {
      state.status = false;
      state.collections = action.payload;
    },
    [deleteCollection.rejected]: (state, action) => {
      state.status = false;
      state.error = action.payload.message;
    },
  },
});

export default collectionsSlice.reducer;
