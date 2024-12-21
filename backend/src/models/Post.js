const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}, 
    title: {type: String, required: true},
    description: {type: String}
});

module.exports = Post = mongoose.model('Post', PostSchema);