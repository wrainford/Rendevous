const router = require("express").Router();
const {posts} = require("../controllers");
const authRequired = require("../middleware/auth.required");


router.get("/", posts.index);
router.post("/", posts.create);
router.put("/:id", posts.update);
router.delete("/:id", posts.destroy);
router.post("/:id/comments", posts.newComment);
router.get("/:id/comments/:id/edit", posts.editComment);
router.put("/comments/:id", posts.updateComment);
router.delete("/comments/:id", posts.deleteComment);

// router.get("/profile", authRequired, users.show)

module.exports = router;