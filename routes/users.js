const router = require("express").Router();
const { modifyUser, getCurrentUser } = require("../controllers/users");
const { validateUpdateUser } = require("../middlewares/validation");

router.patch("/me", validateUpdateUser, modifyUser);
router.get("/me", getCurrentUser);

module.exports = router;
