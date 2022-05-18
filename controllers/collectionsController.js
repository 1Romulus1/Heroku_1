// import mongoose from "mongoose";
import Collection from "../models/Collection.js";
import User from "../models/User.js";

export const getAllCollections = async (req, res, next) => {
  let collections;
  try {
    collections = await Collection.find();
  } catch (error) {
    console.log(error);
  }
  if(!collections) {
    return res.status(404).json({ message: "No collections found" });
  }
  return res.status(200).json({ collections });
};

export const getAllUserCollections = async (req, res, next) => {
  const userId = req.params.id;
  let collections;
  try {
    userCollections = await Collection.findById(userId)
  } catch (error) {
    console.log(error);
  }
  if(!userCollections) {
    return res.status(404).json({message:"No collections"})
  }
  return res.status(200).json({ user: userCollections });
};

export const createCollection = async (req, res, next) => {};

export const updateCollection = async (req, res, next) => {};

export const deleteCollection = async (req, res, next) => {};

