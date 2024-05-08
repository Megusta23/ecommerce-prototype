const express = require("express");

const router = express.Router();

const {
  getAllItems,
  getSingeItem,
  createItem,
  deleteItem,
  updateItem,
} = require("../controllers/shopContolers");

//GET all items in shop
router.get("/", getAllItems);

//GET a singe item in shop
router.get("/:id", getSingeItem);

//POST a new item in the shop
router.post("/", createItem);

//DELETE a item in the shop
router.delete("/:id", deleteItem);

//UPDATE a item in the shop
router.patch("/:id", updateItem);

module.exports = router;
