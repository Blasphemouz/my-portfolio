const express = require("express");
const router = express.Router();
const commentController = require("../controllers/comment_controller");

router.post("/post/commenttodb", commentController.commentToDB);

router.put("/put/updatecomment", commentController.updateComment);

router.delete("/delete/comment", commentController.deleteComment);

router.get("/get/allcomments", commentController.getAllComments);

module.exports = router;