const { Client } = require("pg");
require("dotenv").config();

const SQL = `CREATE TABLE IF NOT EXISTS Brand (
	brandId INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
	brandName VARCHAR ( 20 ) );
  
  INSERT INTO Brand (brandName)
  VALUES 
  ('Nike'),
  ('Adidas'),
  ('Puma'),
  ('New Balance');
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
