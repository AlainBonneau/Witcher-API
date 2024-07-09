import { Model, DataTypes } from "sequelize";
import sequelize from "../database.js";

export class Weakness extends Model {}

Weakness.init(
  {
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "faiblesse",
  }
);
