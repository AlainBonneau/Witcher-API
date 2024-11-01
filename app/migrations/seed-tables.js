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
  name: "Leshen",
  avatar:
    "https://i.pinimg.com/736x/e0/a9/e1/e0a9e1132ab919ec6940c6943d17e0b2.jpg",
  description:
    "Les leshens sont des créatures anciennes liées aux forêts. Ils peuvent invoquer des animaux et contrôler les arbres.",
  location: "Les leshens vivent dans les forêts profondes et anciennes",
  weakness: "Vulnérables à l'argent",
  resistance: "Résistent aux poisons et aux malédictions",
});

await Monster.create({
  name: "Succube",
  avatar:
    "https://i.pinimg.com/originals/cb/f2/02/cbf20293d7ad0bac1e44c927f9373fb8.jpg",
  description:
    "Les succubes sont des démons qui se nourrissent de l'énergie vitale des humains.",
  location: "Les succubes vivent dans les villes et les villages",
  weakness: "Vulnérables à l'argent",
  resistance: "Résistent aux poisons et aux malédictions",
});

await Monster.create({
  name: "Goule",
  avatar:
    "https://static.wikia.nocookie.net/witcher_gamepedia/images/4/4f/Tw3_cardart_monsters_ghoul_2.png",
  description:
    "Les goules sont des monstres nécrophages qui se nourrissent de chair humaine.",
  location: "Les goules vivent dans les cimetières et les cryptes",
  weakness: "Vulnérables à l'argent",
  resistance: "Résistent aux poisons et aux malédictions",
});

await Monster.create({
  name: "Griffon",
  avatar:
    "https://www.bbfil.fr/wp-content/uploads/2024/05/les-secrets-de-la-derniere-mise-a-jour-de-the-witcher-3-apprivoisez-et-chevauchez-un-griffon-scaled.jpg",
  description:
    "Les griffons sont des créatures mythiques qui ont le corps d'un lion et la tête d'un aigle.",
  location: "Les griffons vivent dans les montagnes et les forêts",
  weakness: "Vulnérables à l'argent",
  resistance: "Résistent aux poisons et aux malédictions",
});

await Monster.create({
  name: "Wyverne",
  avatar:
    "https://i.pinimg.com/736x/85/ae/cc/85aecc88f724a2cbf8aa1e378791be25.jpg",
  description:
    "Les wyvernes sont des créatures reptiliennes qui ressemblent aux dragons.",
  location: "Les wyvernes vivent dans les montagnes et les cavernes",
  weakness: "Vulnérables à l'argent",
  resistance: "Résistent aux poisons et aux malédictions",
});

await Monster.create({
  name: "Nekker",
  avatar:
    "https://static.wikia.nocookie.net/sorceleur_gamepedia/images/a/ac/Nekker_par_Katarzyna_Redesiuk.jpg",
  description:
    "Les nekkers sont des créatures humanoïdes qui vivent en groupe dans les forêts.",
  location: "Les nekkers vivent dans les forêts et les marais",
  weakness: "Vulnérables à l'argent",
  resistance: "Résistent aux poisons et aux malédictions",
});

await Monster.create({
  name: "Ogre",
  avatar:
    "https://static.wikia.nocookie.net/sorceleur_gamepedia/images/7/71/Ogre_par_Anton_Nazarenko.jpg",
  description:
    "Les ogres sont des créatures géantes et stupides qui se nourrissent de chair humaine.",
  location: "Les ogres vivent dans les montagnes et les cavernes",
  weakness: "Vulnérables à l'argent",
  resistance: "Résistent aux poisons et aux malédictions",
});

await Monster.create({
  name: "Spectre",
  avatar:
    "https://static.wikia.nocookie.net/sorceleur_gamepedia/images/b/b4/Spectre_de_minuit_par_Lorenzo_Mastroianni.jpg",
  description:
    "Les spectres sont des esprits tourmentés qui hantent les lieux où ils sont morts.",
  location: "Les spectres vivent dans les ruines et les cimetières",
  weakness: "Vulnérables à l'argent",
  resistance: "Résistent aux poisons et aux malédictions",
});

await Monster.create({
  name: "Géant",
  avatar:
    "https://sjc1.vultrobjects.com/cucdn/gallery-25/art/tw3wh-ice-giant-render.jpg",
  description:
    "Les géants sont des créatures gigantesques qui vivent dans les montagnes.",
  location: "Les géants vivent dans les montagnes et les cavernes",
  weakness: "Vulnérables à l'argent",
  resistance: "Résistent aux poisons et aux malédictions",
});

await Monster.create({
  name: "Doppler",
  avatar:
    "https://static.wikia.nocookie.net/sorceleur_gamepedia/images/9/9f/Doppler_par_Bart%C5%82omiej_Gawe%C5%82.jpg",
  description:
    "Les dopplers sont des métamorphes qui peuvent prendre l'apparence de n'importe qui.",
  location: "Les dopplers vivent dans les villes et les villages",
  weakness: "Vulnérables à l'argent",
  resistance: "Résistent aux poisons et aux malédictions",
});

await Monster.create({
  name: "Vampire",
  avatar: "https://www.piwwie.com/wp-content/uploads/2018/09/header-regis.jpg",
  description:
    "Les vampires sont des créatures immortelles qui se nourrissent de sang humain.",
  location: "Les vampires vivent dans les châteaux et les cryptes",
  weakness: "Vulnérables à l'argent",
  resistance: "Résistent aux poisons et aux malédictions",
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
