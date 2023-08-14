import Video from "../models/VideoModel.js";

export const getVideos = async (req, res) => {
    try {
        const videos = await Video.find();
        res.json(videos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getVideosById = async (req, res) => {
    try {
        const video = await Video.findById(req.params.id);
        res.json(video);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const saveVideos = async (req, res) => {
    const video = new Video(req.body);
    try {
        const insertedvideo = await video.save();
        res.status(201).json(insertedvideo);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const getProduct = async (req, res) => {
    try {
        const product = await Video.findOne({_id: req.params.id}, {product: 1});
        res.status(200).json(product);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const getComment = async (req, res) => {
    try {
        const comment = await Video.findOne({_id: req.params.id}, {comment: -1});
        res.status(200).json(comment);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const saveComment = async (req, res) => {
    try {
        const insertedcomment = await Video.updateOne({_id: req.params.id},{"$push": {"comment": req.body}});
        res.status(201).json(insertedcomment);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};