const router = require("express").Router()

router.use("/users", require("./users"))
router.use("/posts", require("./posts"))
router.use("/auth", require("./auth"))

module.exports = router;