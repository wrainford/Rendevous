const router = require("express").Router();
const {posts} = require("../controllers");
const authRequired = require("../middleware/auth.required");


router.get("/", posts.indexPost);
router.post("/", posts.createPost);
router.put("/:id", posts.updatePost);
router.delete("/:id", posts.destroyPost);
router.post("/:id/comments", posts.newComment);
router.get("/:id/comments/:id/edit", posts.editComment);
router.put("/comments/:id", posts.updateComment);
router.delete("/comments/:id", posts.deleteComment);
router.post("/:id/image", posts.addImage);

// router.get("/profile", authRequired, users.show)

module.exports = router;