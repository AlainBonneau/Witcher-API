+-------------+       +--------+       +----------+       +-----------+       +-----------+
| Monstre     |       | Type   |       | Habitat  |       | Faiblesse |       | Résistance|
+-------------+       +--------+       +----------+       +-----------+       +-----------+
| ID_Monstre  |       | ID_Type|       | ID_Habitat|      | ID_Faiblesse|      | ID_Résistance|
| Nom         |       | Nom    |       | Nom      |       | Nom       |       | Nom        |
| Description |       | Description|   | Description|     | Description|      | Description|
| Type_ID (FK)|       +--------+       +----------+       +-----------+       +-----------+
| ...         |
+-------------+

+-------------+
| Sorcier     |
+-------------+
| ID_Sorcier  |
| Nom         |
| École       |
| Niveau      |
+-------------+

+-------------+
| Chasse      |
+-------------+
| ID_Chasse   |
| ID_Sorcier (FK)|
| ID_Monstre (FK)|
| Date        |
| Lieu        |
| Résultat    |
+-------------+

Relations:
- Type 1-n Monstre (un type peut avoir plusieurs monstres)
- Monstre n-n Habitat (un monstre peut habiter dans plusieurs habitats et vice versa)
- Monstre n-n Faiblesse (un monstre peut avoir plusieurs faiblesses et vice versa)
- Monstre n-n Résistance (un monstre peut avoir plusieurs résistances et vice versa)
- Sorcier n-n Monstre via Chasse (un sorcier peut chasser plusieurs monstres et vice versa)
