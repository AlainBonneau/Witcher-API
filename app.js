import express from "express";
import "dotenv/config";
import { router as apiRouter } from "./app/routers/router.js";

const version = process.env.API_VERSION;

// Créer l'app
export const app = express();

// Middleware
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("Witcher API");
});

app.use(`/api/v${version}`, apiRouter);

// Start the server
const port = process.env.PORT || 8999;
app.listen(port, () => {
  console.log(`Serveur démarré http://localhost:${port}`);
});
