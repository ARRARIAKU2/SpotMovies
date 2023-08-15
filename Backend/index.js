import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import UserRoute from './routes/UserRoute.js';
import VideoRoute from './routes/VideoRoute.js';

dotenv.config();

const mongooseString = process.env.DATABASE_URL;

const app = express();

mongoose.connect(mongooseString);

const db = mongoose.connection;
db.on('error', (error) => {
    console.error(error)
});
db.once('connected', () => {
    console.log('Connected to database')
})

app.use(cors());
app.use(express.json());
app.use(UserRoute);
app.use(VideoRoute);

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log('Server running on port ', port);
});
