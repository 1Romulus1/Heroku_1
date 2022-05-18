import axios from 'axios'

export const getAllCollections = () => axios.get("/api/collections");
export const getAllUserCollections = () => axios.get("/api/collections/user");
export const createCollection = () => axios.post("/api/collections/user/create");
export const updateCollection = () => axios.post("/api/collections/user/:id");
export const deleteCollection = () => axios.delete("/api/collections/user/:id");


export const getAllUsers = () => axios.get("/api/users");
export const getUser = () => axios.get("/api/users/:id");

