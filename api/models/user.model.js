import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        default: "https://th.bing.com/th/id/OIP.Nen6j3vBZdl8g8kzNfoEHQAAAA?pid=ImgDet&rs=1"
    },
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;