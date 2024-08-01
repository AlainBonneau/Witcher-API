import { Model, DataTypes } from "sequelize";
import sequelize from "../database.js";

export class Monster extends Model {}

Monster.init(
  {
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    avatar: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    // breed: {
    //   type: DataTypes.STRING(50),
    //   allowNull: false,
    // },
    location: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    weakness: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    resistance: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: "monstre",
  }
);
