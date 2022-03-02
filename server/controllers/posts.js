const db = require("../models")
const cloudinary = require('cloudinary').v2;

const indexPost = (req, res) => {
    db.Post.find().exec((err, allPosts) => {
        if(err)
            return res.status(400).json({
                message: "Failed to get posts",
                error: err,
            });
            return res.status(200).json({
                message: "Successful posts retrieval",
                data: allPosts,
            });
        });
};

const showPost = (req, res) => {
    db.Post.findById(req.params.id, (err, foundPost) => {
        if(err)
            return res.status(400).json({
                message: "Failed to find a post",
                error: err,
            });
            return res.status(200).json({
                message: "Successfully retrieved a post",
                data: foundPost,
            });
    });
};

const createPost = (req, res) => {
    db.Post.create(req.body, (err, savedPost) => {
        if(err)
            return res.status(400).json({
                message: "Failed to create post",
                error: err,
            });
            return res.status(200).json({
                message: "Success",
                data: savedPost,
            });
    });
}

const updatePost = (req, res) => {
    db.Post.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true },
        (err, updatedPost) => {
            if(err)
                return res.status(400).json({
                    message: "Failed to update post",
                    error: err
                });
                return res.status(202).json({
                    message: "Successfully updated a post",
                    data: updatedPost,
                });
        }
    );
};

const destroyPost = (req, res) => {
    db.Post.findByIdAndDelete(req.params.id, (err, deletedPost) =>{
        if(err)
        return res.status(400).json({
            message: "Failed to delete post",
            error: err
        });
        return res.status(200).json({
            message: "Successfully deleted post",
            data: deletedPost,
        });
    });
}

const newComment = (req, res) => {
    db.Post.findById(req.params.id, (err, com) => {
        com.comment.push(req.body);
        com.save(function() {
            if(err)
                return res.status(400).json({
                    message: "Failed to create a comment",
                    error: err
                });
                return res.status(200).json({
                    message: "Successfully created a comment",
                    data: com,
                });
        });
    });
};

const editComment = (req, res) => {
    db.Post.findOne({"comment._id":req.params.id}, (err, post) => {
        const compost = post.comment.id(req.params.id);
        const context = {comment: compost};
            if(err)
            return res.status(400).json({
                message: "Failed to show comment",
                error: err,
            });
            return res.status(200).json({
                message: "Successfully retrieved comment info",
                data: context,
            });
    });
};

const updateComment = (req, res) => {
    db.Post.findOne({"comment._id":req.params.id}, (err, com) => {
        const compost = com.comment.id(req.params.id);
        compost.set(req.body);
        com.save(function() {
            if(err)
                return res.status(400).json({
                    message: "Failed to update comment",
                    error: err,
                });
                return res.status(200).json({
                    message: "Successfully updated comment",
                    data: com,
                });
        });
    });
};

const deleteComment = (req, res) => {
    db.Post.findOne({"comment._id":req.params.id}, (err, com) => {
        const commentDoc = com.comment.id(req.params.id);
        commentDoc.remove();
        com.save(function() {
            if(err)
                return res.status(400).json({
                    message: "Failed to delete a comment",
                    error: err
                });
                return res.status(200).json({
                    message: "Successfully deleted a comment",
                    data: com
            });
        });
    });
};

const addImage = (req, res) => {
    const photo = req.files.image;
    photo.mv(`./uploads/postImages/${photo.name}`);
    const result = cloudinary.uploader.upload(`./uploads/${photo.name}`);
    req.body.image = result.secure_url;   
    db.Post.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new : true},
        (err, photo) => {
            if(err)
                return res.status(400).json({
                    message: "Failed to upload image",
                    error: err,
                });
                return res.status(200).json({
                    message: "Successfully added an image",
                    data: photo,
        });
    });
}     
   
    // if(err)
    // return res.status(400).json({
    //     message: "Failed to upload image to post.",
    //     error: err,
    // });

  

module.exports = {
    indexPost,
    showPost,
    createPost,
    updatePost,
    destroyPost,
    newComment,
    editComment,
    updateComment,
    deleteComment,
    addImage,
}