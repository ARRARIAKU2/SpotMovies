import mongoose from 'mongoose';

const User = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String, 
        required: true
    },
    age: {
        type: Number,
        required: true
    }
});

export default mongoose.model('Users', User);