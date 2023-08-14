import mongoose from "mongoose";

const Video = mongoose.Schema({
    videoID: {
        type: String,
        required: true
    },
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
        commentDate: {
            type: Date,
            default: Date.now,
            required: true
        }
    }]
});

export default mongoose.model('Videos', Video);
