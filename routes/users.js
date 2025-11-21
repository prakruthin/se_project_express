const router = require("express").Router();
const { modifyUser, getCurrentUser } = require("../controllers/users");
const { validateUser } = require("../middlewares/validation");

router.patch("/me", validateUser, modifyUser);
router.get("/me", getCurrentUser);

module.exports = router;
