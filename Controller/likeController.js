const Post = require("../Model/posttModel");
const Like = require("../Model/likeeModel");


exports.likepost = async (req,res) =>{
    try {
        const {post,user} = req.body;
        const like = new Like({
            post,user
        });

        const savedLike = await like.save();

        //Update the post collection
        const updatePost = await Post.findByIdAndUpdate(post,{$push:{likes:savedLike._id}},{new:true})
        
        res.json({
            post:updatePost
        })
    } catch (error) {
         //handle the error
         console.log(error);
         console.error(error);
         res.status(500).json({
             status:false,
             data:"Interval server error",
             message:error.message,
         })
    }
}

exports.unlikepost = async (req,res) =>{
    try {
        
        const {post,like} = req.body;
        //find and delete from like

        const deletedLike = await Like.findOneAndDelete({post:post,_id:like});

        //update the post collection
        const updatedPost = await Post.findByIdAndUpdate(post,{$pull:{likes:deletedLike._id}},{new:true})
        res.json({
            post:updatedPost
        })


    } catch (error) {
        console.log(error);
        console.error(error);
        res.status(500).json({
            status:false,
            data:"Interval server error",
            message:error.message,
        })
    }
}