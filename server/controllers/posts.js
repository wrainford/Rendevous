const db = require("../models")

const indexPost = (req, res) => {
    db.Post.find()
    .populate("user")
    .exec((err, allPosts) => {
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
    db.Post.findById(req.params.id)
    .populate("user")
    .exec((err, foundPost) => {
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

const createPost = async (req, res) => {
    let postData;
    if(req.file !== undefined) {
        postData = {
            title: req.body.title,
            body: req.body.body,
            image: req.file.originalname,
            user: req.userId
        }
    } else {
        postData = {
            title: req.body.title,
            body: req.body.body,    
            user: req.userId
        }
    }

    db.Post.create(postData, (err, savedPost) => {
        if(err)
            return res.status(400).json({
                message: "Failed to create post",
                error: err,
            });
            db.User.findById(savedPost.user)
            .exec((err, foundUser) => {
                if(err) return res.status(400).json({
                    message: "Failed to create a post",
                    error: err,
                })
                foundUser.post.push(savedPost)
                foundUser.save()
            })
            return res.status(200).json({
                message: "Successfully created post",
                data: savedPost,
            });
    });
}

const updatePost = (req, res) => {
    let postData; 
    if(req.file !== undefined){
        postData = { 
            title: req.body.title,
            body: req.body.body,
            image: req.file.originalname,
        }
    } else {
        postData = {
            title: req.body.title,
            body: req.body.body,
        }
    }

    db.Post.findByIdAndUpdate(
        req.params.id,
        postData,
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
        console.log(req.params.id)
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
        let commentData = {
            content: req.body.content,
            user: req.userId
        }
        console.log(commentData);
        com.comment.push(commentData);
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
}