import { Resistance } from "../models/resistance.model.js";

const resistanceController = {
  // Permet de récupérer toutes les résistances.
  getAllResistance: async (req, res) => {
    const resistanceList = await Resistance.findAll();
    if (!resistanceList) {
      return res.status(404).json({ error: "Aucune résistance trouvée" });
    }
    res.json(resistanceList);
  },

  // Permet de récupérer une résistance via son id.
  GetOneResistance: async (req, res) => {
    const resistance = await Resistance.findByPk(req.params.id);
    if (!resistance) {
      return res.status(404).json({ error: "Résistance inconnue" });
    }
    res.json(resistance);
  },
};

export default resistanceController;
