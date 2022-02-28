const db = require("../models")

const index = (req, res) => {
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

const create = (req, res) => {
    db.Post.create(req.body, (err, savedPost) => {
        if(err)
            return res.status(400).json({
                message: "Failed to create post",
                error: err,
            });
            return res.status(201).json({
                message: "Success",
                data: savedPost,
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
                return res.status(201).json({
                    message: "Successfully created a comment",
                    data: com,
                });
        });
    });
};

  

module.exports = {
    index,
    create,
    newComment,
}