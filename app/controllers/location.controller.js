import { Location } from "../models/location.model.js";

const locationController = {
  // Permet de récupérer toutes les locations
  getAllLocation: async (req, res) => {
    const locationList = await Location.findAll();
    if (!locationList) {
      return res.status(404).json({ error: "Aucune location trouvée" });
    }
    res.json(locationList);
  },

  // Permet de récupérer une location via son id.
  getOneLocation: async (req, res) => {
    const location = await Location.findByPk(req.params.id);
    if (!location) {
      return res.status(404).json({ error: "Location inconnue" });
    }
    res.json(location);
  },
};

export default locationController;
