const express = require('express');
const Post = require('../models/Post');

const router = express.Router();

router.post('/', async(req, res) => {
    const {userId, title, description} = req.body;

    try {
        const post = new Post({ userId, title, description });
        await post.save();
        res.status(201).json(post);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
});

router.get('/', async(req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
})


module.exports = router;