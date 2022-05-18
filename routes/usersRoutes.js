import express from "express";
import { getAllUsers, getUser, logIn, signUp } from "../controllers/usersControllers.js";

const usersRourer = express.Router()

usersRourer.get('/', getAllUsers);
usersRourer.get('/:id', getUser);
usersRourer.post('/signup', signUp)
usersRourer.post('/login', logIn)

export default usersRourer;