import express from 'express';
import { getVideos, getVideosById, saveVideos, getProduct, getComment, saveComment } from "../controllers/VideoController.js";

const router = express.Router();

router.get('/videos', getVideos);
router.get('/videos/:id', getVideosById);
router.post('/videos', saveVideos);
router.get('/videos/:id/product', getProduct);
router.get('/videos/:id/comment', getComment);
router.patch('/videos/:id', saveComment);


export default router;