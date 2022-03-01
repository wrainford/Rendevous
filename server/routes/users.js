const router = require("express").Router();
const {users} = require("../controllers");
// const authRequired = require("../middleware/auth.required");


router.get("/", users.index);
router.post("/:id/projects", users.newProject);
router.delete("/projects/:id", users.deleteProject);
// router.get("/profile", authRequired, users.show)

module.exports = router;