import { Model, DataTypes } from "sequelize";
import sequelize from "../database.js";

export class Resistance extends Model {}

Resistance.init(
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
    tableName: "résistance",
  }
);