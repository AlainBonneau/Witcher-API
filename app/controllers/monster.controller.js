import { Monster } from "../models/monster.model.js";

const monsterController = {
  getAllMonster: async (req, res) => {
    const monsterList = await Monster.findAll();
    res.json(monsterList);
  },
};
