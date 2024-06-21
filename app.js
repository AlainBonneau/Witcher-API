import express from "express";
import "dotenv/config";

// Créer l'app
export const app = express();

// Middleware
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("Witcher API");
});

// Start the server
const port = process.env.PORT || 8999;
app.listen(port, () => {
  console.log(`Serveur démarré http://localhost:${port}`);
});
