const express = require('express');
const router = express.Router();

//const{dummyLink} = require("../Controller/LikeController")
const{createComment} = require("../Controller/CommentController");
const{createPost,getAllPosts} = require("../Controller/posttController");
const { likepost, unlikepost } = require('../Controller/likeController');
//mapping
//router.get("/dummylink",dummyLink);
router.post("/comments/create",createComment);
router.post("/post/create",createPost);
router.get("/getallposts",getAllPosts);
router.post("/likes/like",likepost)
router.post("/likes/unlike",unlikepost);

//export the module for use
module.exports = router;