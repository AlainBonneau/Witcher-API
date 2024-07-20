import { Monster } from "../models/monster.model.js";

const monsterController = {
  getAllMonster: async (req, res) => {
    const monsterList = await Monster.findAll();
    res.json(monsterList);
  },
  getMonsterById: async (req, res) => {
    const monster = await Monster.findByPk(req.params.id);
    res.json(monster);
  },
};

export default monsterController;
