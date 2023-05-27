//import the model
const Post = require("../Model/posttModel");
// const Like = require("../Model/likeeModel");
const Comment = require("../Model/commentModel");

//write the business logic
exports.createComment = async(req,res) =>{
    try {
        //fetch the data from the body
        const {post,user,body} = req.body;

        //create a object of the code
        const comment = new Comment({
            post,user,body
        });

        //save the object in the database
        const savedComment = await comment.save();

        //find the post from the collection and update the comment in the comment array
        const updatedPost = await Post.findByIdAndUpdate(post,{$push:{comments:savedComment._id}},{new:true})
                            .populate("comments") //populate the comment array with the documents
                            .exec();
        res.json({
            post:updatedPost,
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success:false,
            error:"Error while creating",
        })
    }
}