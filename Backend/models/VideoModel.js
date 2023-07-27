import mongoose from "mongoose";

const Video = mongoose.Schema({
    videoThumbnail: {
        type: String,
        required: true
    },
    videoTitle: {
        type: String,
        required: true
    },
    product: [{
        productLink: {
            type: String,
            required: true
        },
        productTitle: {
            type: String,
            required: true
        },
        productPrice: {
            type: Number,
            required: true
        },
    }],
    comment: [{
        commentUsername: {
            type: String,
            required: true
        },
        commentContent: {
            type: String,
            required: true
        },
    }]
});

export default mongoose.model('Videos', Video);
