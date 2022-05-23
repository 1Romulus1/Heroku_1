import express from 'express';
import { createCollection, deleteCollection, getAllCollections, getAllUserCollections, updateCollection } from "../controllers/collectionsController.js";

const collectionsRouter = express.Router()

collectionsRouter.get('/', getAllCollections);
collectionsRouter.get('/:id', getAllUserCollections);
collectionsRouter.post("/create", createCollection);
collectionsRouter.post("/:id", updateCollection);
collectionsRouter.delete("/:id", deleteCollection);

export default collectionsRouter