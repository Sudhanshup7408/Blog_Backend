const Post = require("../Model/posttModel");

//Export while using it.
exports.createPost = async(req,res)=>{
    try {

        const {title,body} = req.body;
        const post = new Post({
            title,body
        })

        const savedPost = await post.save();
        res.status(200).json({
            status:true,
            post:savedPost,
            message:"Post created successfully"
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

exports.getAllPosts = async (req,res)=>{
    try {
        const posts = await Post.find({});
        res.json({
            posts,
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