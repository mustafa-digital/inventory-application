/* queries.js */
const pool = require("./pool");

async function getItemFromID(itemId) {
  const { rows } = await pool.query(
    "SELECT * FROM item WHERE item.itemid = ($1)",
    [itemId],
  );
  return rows;
}
async function getCategories() {
  const { rows } = await pool.query("SELECT * FROM Category");
  return rows;
}

async function getCategoryIdFromName(categoryName) {
  const { rows } = await pool.query(
    "SELECT categoryid FROM category WHERE categoryname = ($1)",
    [categoryName],
  );
  return rows;
}

async function getCategoryItems(categoryName) {
  const { rows } = await pool.query(
    "SELECT * FROM item JOIN category ON category.categoryid = item.categoryId WHERE category.categoryname = ($1);",
    [categoryName],
  );
  return rows;
}

async function getBrands() {
  const { rows } = await pool.query("SELECT * FROM Brand");
  return rows;
}

async function getBrandIdFromName(brandName) {
  const { rows } = await pool.query(
    "SELECT brandid FROM brand WHERE brandname = ($1)",
    [brandName],
  );
  return rows;
}

async function getBrandItems(brandName) {
  const { rows } = await pool.query(
    "SELECT * FROM item JOIN brand ON brand.brandid = item.brandid WHERE brand.brandname = ($1);",
    [brandName],
  );
  return rows;
}

async function insertItem(item) {
  await pool.query(
    "INSERT INTO item (itemname, categoryid, brandid, inventory) VALUES ($1, $2, $3, $4)",
    [item.itemName, item.category, item.brand, item.inventory],
  );
  console.log("Added item to db");
}

async function updateItem(item) {
  await pool.query(
    "UPDATE item SET itemname = ($1), categoryid = ($2), brandid = ($3), inventory = ($4) WHERE itemid = ($5)",
    [item.itemName, item.category, item.brand, item.inventory, item.itemId],
  );
  console.log(`Updated item ${item.itemId}`);
}

async function deleteItem(itemId) {
  await pool.query("DELETE FROM item WHERE item.itemid = ($1)", [itemId]);
  console.log(`Deleted item ${itemId}`);
}

module.exports = {
  getItemFromID,
  getCategories,
  getBrands,
  getCategoryIdFromName,
  getCategoryItems,
  getBrandIdFromName,
  getBrandItems,
  insertItem,
  updateItem,
  deleteItem,
};
