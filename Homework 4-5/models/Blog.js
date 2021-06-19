const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    postedAt: {
        type: String,
        default: new Date().toString(),
    },
    private: {
        type: Boolean,
        default: false,
    },
    comments: [
        {
            email: String, //better optimzation but not required
        },
        {
            firstname: String,
        },
        {
            reply: String,
        },
        {
            replyDate: String,
            default: new Date().toString(),
        },
    ],
});

module.exports = new mongoose.model('Blog', BlogSchema);
