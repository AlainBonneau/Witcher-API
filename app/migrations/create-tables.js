import { sequelize } from "sequelize";

console.log("🗑️ Suppression des tables existantes...");
await sequelize.drop();

console.log("🚧 Définition des tables...");
await sequelize.sync();

console.log("✅ Migration OK ! Fermeture de la base...");
await sequelize.close();
