const { Client } = require("pg");
require("dotenv").config();

const SQL = `CREATE TABLE IF NOT EXISTS Item (
	itemId INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
	itemName VARCHAR ( 50 ),
	categoryId INTEGER REFERENCES Category(categoryId),
	brandId INTEGER REFERENCES Brand (brandId),
	inventory INTEGER );
  
  INSERT INTO Item (itemName, categoryId, brandId, inventory)
  VALUES 
  ('Red Nike Sweater', 2, 1, 22),
  ('Black Adidas Athletic Pants', 4, 2, 9),
  ('White Adidas Hat', 3, 2, 15),
  ('Maroon Puma Shoes', 5, 3, 3),
  ('White New Balance Tshirt', 1, 4, 38);
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
