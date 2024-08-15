/* queries.js */
const pool = require("./pool");

async function getCategories() {
  const { rows } = await pool.query("SELECT * FROM Category");
  return rows;
}

async function getBrands() {
  const { rows } = await pool.query("SELECT * FROM Brand");
  return rows;
}

module.exports = {
  getCategories,
  getBrands,
};
