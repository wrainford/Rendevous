const router = require("express").Router();
const {posts} = require("../controllers");
// const authRequired = require("../middleware/auth.required");


router.get("/", posts.index);
router.post("/", posts.create);
router.post("/:id/comments", posts.newComment);

// router.get("/profile", authRequired, users.show)

module.exports = router;