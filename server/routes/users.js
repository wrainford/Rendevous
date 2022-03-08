const router = require("express").Router();
const {users} = require("../controllers");
const multer = require("multer");
// const authRequired = require("../middleware/auth.required");

const limits = {
    files: 1,
    filesize: 1024 * 1024,
};

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, "../client/public/uploads/avatar");
    },
    filename: (req, file, callback) => {
        callback(null, file.originalname);
    }
});

const upload = multer({
    storage: storage,
    limits: limits,
});

router.get("/", users.indexUser);
router.get("/:id", users.showUser);
router.put("/:id", upload.single("avatar"), users.updateUser);
router.delete("/:id", users.destroyUser);
router.post("/:id/projects", users.newProject);
router.delete("/projects/:id", users.deleteProject);
// router.get("/profile", authRequired, users.show)

module.exports = router;