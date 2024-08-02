import { Resistance } from "../models/resistance.model.js";

const resistanceController = {
  getAllResistance: async (req, res) => {
    const resistanceList = await Resistance.findAll();
    res.json(resistanceList);
  },

  GetOneResistance: async (req, res) => {
    const resistance = await Resistance.findByPk(req.params.id);
    res.json(resistance);
  },
};

export default resistanceController;
