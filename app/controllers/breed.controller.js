import { Breed } from "../models/breed.model.js";

const breedController = {
  // Permet de récupérer toutes les races.
  getAllBreed: async (req, res) => {
    const breedList = await Breed.findAll();
    if (!breedList) {
      return res.status(404).json({ error: "Aucune race trouvée" });
    }
    res.json(breedList);
  },

  // Permet de récupérer une race via son id.
  getBreedById: async (req, res) => {
    const breed = await Breed.findByPk(req.params.id);
    if (!breed) {
      return res.status(404).json({ error: "Race Inconnue" });
    }
    res.json(breed);
  },
};

export default breedController;
