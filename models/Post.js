const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

// const user = mongoose.Schema({
//     username: String,
//     password: String,
// })

module.exports = mongoose.model('Posts', PostSchema);