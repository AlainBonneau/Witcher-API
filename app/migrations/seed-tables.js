import "dotenv/config";
import {
  Monster,
  Breed,
  Location,
  Resistance,
  Weakness,
} from "../models/associations.js";

console.log("🚧 Création des données en cours...");

// Création des monstres en base de données !

await Monster.create({
  name: "Loup-Garou",
  avatar: "",
  description:
    "Si vous trouvez des poils sur vos draps le matin, si malgré des ablutions d'hier soir vous trouver des morceaux de viande d'origine suspecte entre vos dents, ces signes peuvent indiquer que vous êtes en fait un loup-garou. Entrez en communication avec un sorceleur le plus vite possible. Et n'oubliez pas de payer en avance.",
  location:
    "les loups-garous sont des lycanthropes, ce qui signifie que ce sont des humains qui changent de formes à l’issue d’un malédiction. Les loups-garous vivent à proximité des humains",
  weakness: "Vulnérable à l’argent",
  resistance: "Ils résistent à l’acier et à la plupart des effets",
});

await Monster.create({
  name: "Basilic",
  avatar: "",
  description:
    "Le basilic est un ornithosaure qui terrorise parfois des communautés.",
  location:
    "Les basilics élisent domicile dans des endroits sombres et humides comme les grottes ou les canaux secondaires abandonnés",
  weakness: "Vulnérables à l'argent et à l'huile contre les ornithosaures",
  resistance: "Insensibles à la plupart des poisons et difficiles à étourdir",
});

// Création des races en base de données !

await Breed.create({
  name: "Créatures maudites",
  description:
    "Les créatures maudites sont des êtres humains qui ont été transformés en monstres par une malédiction.",
  avatar: "",
});

await Breed.create({
  name: "Draconides",
  description:
    "Les draconides sont des monstres reptiliens qui ont des capacités magiques.",
  avatar: "",
});

// Création des résistances en base de données !

await Resistance.create({
  name: "Poison",
  description: "Résistance aux poisons",
});

await Resistance.create({
  name: "Acier",
  description: "Résistance aux armes en acier",
});

// Création des faiblesses en base de données !

await Weakness.create({
  name: "Argent",
  description: "Vulnérable à l'argent",
});

await Weakness.create({
  name: "Huile contre les ornithosaures",
  description:
    "Appliquez cette huile sur votre épée pour infliger des dégâts accrus aux ornithosaures",
});

// Création des locations en base de données !

await Location.create({
  name: "Kaer Morhen",
  description:
    "Kaer Morhen est une ancienne forteresse partiellement ruinée, bâtie dans les montagnes au nord-est du royaume de Kaedwen",
});

await Location.create({
  name: "Caverne",
  description:
    "Les cavernes dans sont des grottes naturelles sombres et humides. Elles ont des parois rocheuses rugueuses, souvent couvertes de mousses et de champignons lumineux. L’air est frais et chargé d’une odeur de terre humide. On peut y trouver des stalactites et des stalagmites, ainsi que des formations minérales étranges. Elles abritent parfois des créatures dangereuses comme des goules ou des araignées. L'éclairage est faible, généralement éclairé par des sources naturelles ou magiques, ce qui crée une atmosphère mystérieuse et inquiétante.",
});
