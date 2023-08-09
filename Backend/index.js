import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import UserRoute from './routes/UserRoute.js';
import VideoRoute from './routes/VideoRoute.js';

dotenv.config();

const mongooseString = process.env.DATABASE_URL;

const app = express();

mongoose.connect(mongooseString, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
});

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

app.listen(5000, () => {
    console.log('Server running on port 5000');
});
