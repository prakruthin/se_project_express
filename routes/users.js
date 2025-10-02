const router = require("express").Router();
const { modifyUser, getCurrentUser } = require("../controllers/users");

router.patch("/me", modifyUser);
router.get("/me", getCurrentUser);

module.exports = router;
