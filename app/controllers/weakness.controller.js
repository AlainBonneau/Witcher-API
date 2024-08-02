import { Weakness } from "../models/weakness.model.js";

const weaknessController = {
  // Permet de récupérer toutes les faiblesses.
  getAllWeakness: async (req, res) => {
    const weaknessList = await Weakness.findAll();
    if (!weaknessList) {
      return res.status(404).json({ error: "Aucune faiblesse trouvée" });
    }
    res.json(weaknessList);
  },

  // Permet de récupérer une faiblesse via son id.
  getOneWeakness: async (req, res) => {
    const weakness = await Weakness.findByPk(req.params.id);
    if (weakness) {
      return res.status(404).json({ error: "Faiblesse inconnue" });
    }
    res.json(weakness);
  },
};

export default weaknessController;
