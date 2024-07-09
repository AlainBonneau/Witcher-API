import { Model, DataTypes } from "sequelize";
import sequelize from "../database.js";

export class Breed extends Model {}

Breed.init(
  {
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    avatar: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "race",
  }
);
