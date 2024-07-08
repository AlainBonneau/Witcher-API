import "dotenv/config";
import pg from "pg";
import { Sequelize } from "sequelize";

const database = process.env.DATABASE_URL;

export const sequelize = new Sequelize(database, {
  dialect: "postgres",
  dialectOptions: {
    ssl: false,
  },
});

try {
  await sequelize.authenticate();
  console.log("Connecté avec succès !");
} catch (error) {
  console.log(error);
}

export default sequelize;
