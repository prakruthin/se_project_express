const router = require("express").Router();
const auth = require("../middlewares/auth");
const {
  getItems,
  createItem,
  deleteItem,
  likeItem,
  dislikeItem,
} = require("../controllers/clothingItems");
const {
  validateClothingItems,
  validateIdParam,
} = require("../middlewares/validation");

router.get("/", getItems);
router.post("/", auth, validateClothingItems, createItem);
router.delete("/:itemId", auth, validateIdParam, deleteItem);
router.put("/:itemId/likes", auth, validateIdParam, likeItem);
router.delete("/:itemId/likes", auth, validateIdParam, dislikeItem);

module.exports = router;
