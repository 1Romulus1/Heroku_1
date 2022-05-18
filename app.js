import express from 'express';
import mongoose from 'mongoose';
// import cors from 'cors';
// import path from 'path'
import collectionsRouter from './routes/collectionsRoutes.js'
import usersRourer from './routes/usersRoutes.js';

const port = process.env.PORT || 5000;
// const MONGO_URI = "mongodb+srv://Roman:jeMICw6PoSLtDlVe@cluster4.ofmce.mongodb.net/real_undefined?retryWrites=true&w=majority";

const app = express();

// app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use("/api/collections", collectionsRouter);
app.use("/api/users", usersRourer);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => app.listen(port))
  .then(() => console.log(`Connected to Database localhost ${port}...`))
  .catch((err) => console.log(err));

// const __dirname = path.resolve()
// console.log(__dirname);
// console.log(path.resolve());