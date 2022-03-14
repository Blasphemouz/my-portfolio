const express = require("express");
const router = express.Router();
const postsController = require("../controllers/posts_controller");

router.get('/get/allposts', postsController.getAllPosts);
router.get('/get/post', postsController.getPost);

router.post('/post/posttodb', postsController.postToDB);

router.put('/put/post', postsController.updatePost);
router.put('/put/likes', postsController.putLikes);

router.delete('/delete/post', postsController.deletePost);

module.exports = router;