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

  // Permet de créer un monstre.
  createMonster: async (req, res) => {
    const { name, description, location, weakness, resistance } = req.body;
    if (!name || !description || !location || !weakness || !resistance) {
      console.log("Tous les champs sont obligatoire");
      return res
        .status(400)
        .json({ error: "Merci de remplir tous les champs" });
    }
    const newMonster = {
      name,
      description,
      location,
      weakness,
      resistance,
    };
    await Monster.create(newMonster);
    res.status(201).json(newMonster);
  },

  // Permet de modifier un monstre via son id.
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

  // Permet de supprimer un monstre via son id.
  deleteMonster: async (req, res) => {
    const monsterId = parseInt(req.params.id);
    if (!monsterId) {
      return res.status(404).json({ error: "Id inconnu" });
    }
    const monster = await Monster.findByPk(monsterId);
    if (!monster) {
      return res.status(404).json({ error: "Monstre inconnu" });
    }
    await monster.destroy();
    res.json({ message: "Monstre supprimé" });
  }
};

export default monsterController;
