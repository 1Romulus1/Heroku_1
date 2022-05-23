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
  if (!collections) {
    return res.status(404).json({ message: "No collections found" });
  }
  return res.status(200).json({ collections });
};

export const getAllUserCollections = async (req, res, next) => {
  const userId = req.params.id;
  let collections;
  try {
    userCollections = await Collection.findById(userId);
  } catch (error) {
    console.log(error);
  }
  if (!userCollections) {
    return res.status(404).json({ message: "No collections" });
  }
  return res.status(200).json({ user: userCollections });
};

export const createCollection = async (req, res, next) => {
  const { title, description, image, user } = req.body;
  let existingUser;
  try {
    existingUser = await User.findById(user);
  } catch (error) {
    console.log(error);
  }
  if (!existingUser) {
    return res.status(400).json({ message: "Unable to find User" });
  }
  const collection = new Collection({
    title,
    description,
    image,
    user,
  });
  try {
    await collection.save()
  } catch (error) {
    console.log(error);
  }
  return res.status(200).json({ collection });
};

export const updateCollection = async (req, res, next) => {
  const { title, description } = req.body;
  const collectionId = req.params.id;
  let collection;
  try {
    collection = await Collection.findByIdAndUpdate(collectionId, {
      title,
      description,
    });
  } catch (error) {
    console.log(error);
  }
  if (!collection) {
    return res.status(500).json({ message: "Unable to update the collection" });
  }
  return res.status(200).json({ collection });
};

export const deleteCollection = async (req, res, next) => {
  const id = req.params.id;
  let collection;
  try {
    collection = await Collection.findByIdAndRemove(id);
  } catch (error) {
    console.log(error);
  }
  if (!collection) {
    return res.status(500).json({ message: "Unable to delete" });
  }
  return res.status(200).json({ message: "Saccessfullu delete" });
};
