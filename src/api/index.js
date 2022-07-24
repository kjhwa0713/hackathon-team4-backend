import express from "express";

const cors = require('cors');

const app = express.Router();

const corsOptions = {
  origin: 'http://localhost:3000/api/posts',
  credential: true
}

app.use(cors(corsOptions));

export default app;