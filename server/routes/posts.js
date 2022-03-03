const router = require("express").Router();
const {posts} = require("../controllers");
const multer = require("multer");
const authRequired = require("../middleware/auth.required");

const limits = {
    files: 1,
    filesize: 1024 * 1024,
};

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, "client/public/uploads");
    },
    filename: (req, file, callback) => {
        callback(null, file.originalname);
    }
});

const upload = multer({
    storage: storage,
    limits: limits,
});

router.get("/", posts.indexPost);
router.post("/", upload.single("image"), posts.createPost);
router.put("/:id", posts.updatePost);
router.delete("/:id", posts.destroyPost);
router.post("/:id/comments", posts.newComment);
router.get("/:id/comments/:id/edit", posts.editComment);
router.put("/comments/:id", posts.updateComment);
router.delete("/comments/:id", posts.deleteComment);
// router.post("/:id/image", posts.addImage);

// router.get("/profile", authRequired, users.show)

module.exports = router;