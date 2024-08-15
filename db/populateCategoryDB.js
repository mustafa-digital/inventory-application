const { Client } = require("pg");
require("dotenv").config();

const SQL = `CREATE TABLE IF NOT EXISTS Category (
	categoryId INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
	categoryName VARCHAR ( 20 ) );
  
  INSERT INTO Category (categoryName)
  VALUES 
  ('Tshirts'),
  ('Sweaters'),
  ('Accessories'),
  ('Bottoms'),
  ('Shoes');
  `;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
