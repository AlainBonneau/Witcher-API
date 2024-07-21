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
  updateMonster: async (req, res) => {
    const monsterId = parseInt(req.params.id);

    if (!monsterId) {
      return res.status(404).json({ error: "Id inconnu" });
    }

    const { name, description, location, weakness, resistance } = req.body;
    const monster = await Monster.findByPk(monsterId);
    if (!monster) {
      return res.status(404).json({ error: "Monstre inconnu" });
    }
    const updateMonster = await monster.update({
      name,
      description,
      location,
      weakness,
      resistance,
    });
    res.json(updateMonster);
  },
};

export default monsterController;
