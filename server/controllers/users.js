const db = require("../models")

const indexUser = (req, res) => {
    db.User.find()
    .exec((err, allUsers) => {
        return res.status(200).json({
            message: "Success!",
            data: allUsers
        })
    })
}

const showUser = (req, res) => {
    db.User.findById(req.params.id)
        .populate("post")
        .exec((err, foundUser) => {
        if(err)
            return res.status(400).json({
                message: "Failed to find a user",
                error: err,
            });
            return res.status(200).json({
                message: "User found",
                data: foundUser,
            });
    });
};


const updateUser = (req, res) => {
    let userData;
    if(req.file !== undefined){
        userData = { 
            name: req.body.name,
            userName: req.body.userName,
            email: req.body.email,
            bio: req.body.bio,
            gitHub: req.body.gitHub,
            youTube: req.body.youTube,
            avatar: req.file.originalname,
        }
    } else {
        userData = {
            name: req.body.name,
            userName: req.body.userName,
            email: req.body.email,
            bio: req.body.bio,
            gitHub: req.body.gitHub,
            youTube: req.body.youTube,
        }
    }

    db.User.findByIdAndUpdate(
        req.params.id,
        userData,
        { new: true },
        (err, updatedUser) => {
            if(err)
                return res.status(400).json({
                    message: "Failed to update user info",
                    error: err
                });
                return res.status(202).json({
                    message: "Successfully updated user info",
                    data: updatedUser,
                });
        }
    );
};

const destroyUser = (req, res) => {
    db.User.findByIdAndDelete(req.params.id, (err, deletedUser) =>{
        if(err)
        return res.status(400).json({
            message: "Failed to delete user",
            error: err
        });
        return res.status(200).json({
            message: "User permanently deleted",
            data: deletedUser,
        });
    });
}


const newProject = (req, res) => {
    db.User.findById(req.params.id, (err, user) => {
        user.project.push(req.body);
        user.save(function() {
            if(err)
                return res.status(400).json({
                    message: "Failed to add project",
                    error: err
                });
                return res.status(200).json({
                    message: "Successfully added a project",
                    data: user,
                });
        });
    });
};

const deleteProject = (req, res) => {
    db.User.findOne({"project._id":req.params.id}, (err, user) => {
        const projectDoc = user.project.id(req.params.id);
        projectDoc.remove();
        user.save(function() {
            if(err)
                return res.status(400).json({
                    message: "Failed to delete project",
                    error: err
                });
                return res.status(200).json({
                    message: "Successfully deleted project",
                    data: user,
            });
        });
    });
};

module.exports = {
    indexUser,
    showUser,
    updateUser,
    destroyUser,
    newProject,
    deleteProject,
}