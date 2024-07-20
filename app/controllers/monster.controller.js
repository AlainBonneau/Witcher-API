import { Monster } from "../models/monster.model.js";

const monsterController = {
  // Permet de récupérer tous les monstres.
  getAllMonster: async (req, res) => {
    const monsterList = await Monster.findAll();
    res.json(monsterList);
  },
  // Permet de récupérer un monstre via son id.
  getMonsterById: async (req, res) => {
    const monster = await Monster.findByPk(req.params.id);
    res.json(monster);
  },
};

export default monsterController;
