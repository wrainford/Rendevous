const db = require("../models")

const index = (req, res) => {
    db.User.find()
    .exec((err, allUsers) => {
        return res.status(200).json({
            message: "Success!",
            data: allUsers
        })
    })
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
    index,
    newProject,
    deleteProject,
}