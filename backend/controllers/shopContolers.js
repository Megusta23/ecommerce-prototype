const mongoose = require("mongoose");

const ShopItem = require("../models/shopModels");

//GET all items in shop
const getAllItems = async (req, res) => {
  const items = await ShopItem.find({}).sort({ createdAt: -1 });

  res.status(200).json(items);
};

//GET a singe item in shop
const getSingeItem = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such shop item" });
  }

  const shopItem = await ShopItem.findById(id);

  if (!shopItem) {
    return res.status(404).json({ error: "No such shop item" });
  }

  res.status(200).json(shopItem);
};

//POST a new item in the shop
const createItem = async (req, res) => {
  const { name, price, quantity, category } = req.body;

  // adding better error messages
  let emtyFields = [];

  if (!name) {
    emtyFields.push("name");
  }
  if (!price) {
    emtyFields.push("price");
  }
  if (!quantity) {
    emtyFields.push("quantity");
  }
  if (!category) {
    emtyFields.push("category");
  }

  if (emtyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "Please fill in all the fields ", emtyFields });
  }

  try {
    const shopItem = await ShopItem.create({ name, price, quantity, category });
    res.status(200).json(shopItem);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//DELETE a item in the shop
const deleteItem = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such shop item" });
  }

  const shopItem = await ShopItem.findOneAndDelete({ _id: id });

  if (!shopItem) {
    return res.status(404).json({ error: "No such shop item" });
  }

  res.status(200).json(shopItem);
};

//UPDATE a item in the shop
const updateItem = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such shop item" });
  }

  const shopItem = await ShopItem.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!shopItem) {
    return res.status(400).json({ error: "No such shop item" });
  }

  res.status(200).json(shopItem);
};

module.exports = {
  getAllItems,
  getSingeItem,
  createItem,
  deleteItem,
  updateItem,
};
