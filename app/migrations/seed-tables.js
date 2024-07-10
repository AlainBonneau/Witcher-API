import "dotenv/config";
import {
  Monster,
  Breed,
  Location,
  Resistance,
  Weakness,
} from "../models/associations.js";
$;

console.log("🚧 Création des données en cours...");

await Monster.create({
  name: "Loup-Garou",
  description:
    "Si vous trouvez des poils sur vos draps le matin, si malgré des ablutions d'hier soir vous trouver des morceaux de viande d'origine suspecte entre vos dents, ces signes peuvent indiquer que vous êtes en fait un loup-garou. Entrez en communication avec un sorceleur le plus vite possible. Et n'oubliez pas de payer en avance.",
  location:
    "les loups-garous sont des lycanthropes, ce qui signifie que ce sont des humains qui changent de formes à l’issue d’un malédiction. Les loups-garous vivent à proximité des humains",
  weakness: "Vulnérable à l’argent",
  resistance: "Ils résistent à l’acier et à la plupart des effets",
});

await Monster.create({
  name: "Basilic",
  description:
    "Le basilic est un ornithosaure qui terrorise parfois des communautés.",
  location:
    "Les basilics élisent domicile dans des endroits sombres et humides comme les grottes ou les canaux secondaires abandonnés",
  weakness: "Vulnérables à l'argent et à l'huile contre les ornithosaures",
  resistance: "Insensibles à la plupart des poisons et difficiles à étourdir",
});
