import { Monster } from "./monster.model.js";
import { Breed } from "./breed.model.js";
import { Location } from "./location.model.js";
import { Resistance } from "./resistance.model.js";
import { Weakness } from "./weakness.model.js";
import { sequelize } from "../database.js";

Monster.hasMany(Breed, {
  as: "race",
  foreignKey: "breed_id",
});
Breed.belongsTo(Monster, {
  as: "monstre",
  foreignKey: "breed_id",
});

Monster.belongsToMany(Location, {
  as: "localisation",
  through: "monster_has_location",
  foreignKey: "monster_id",
});
Location.belongsToMany(Monster, {
  as: "monstre",
  through: "monster_has_location",
  foreignKey: "location_id",
});

Monster.belongsToMany(Weakness, {
  as: "faiblesse",
  through: "monster_has_weakness",
  foreignKey: "monster_id",
});
Weakness.belongsToMany(Monster, {
  as: "monstre",
  through: "monster_has_weakness",
  foreignKey: "weakness_id",
});

Monster.belongsToMany(Resistance, {
  as: "résistance",
  through: "monster_has_resistance",
  foreignKey: "monster_id",
});
Resistance.belongsToMany(Monster, {
  as: "monstre",
  through: "monster_has_resistance",
  foreignKey: "resistance_id",
});

export { Monster, Breed, Location, Resistance, Weakness, sequelize };
