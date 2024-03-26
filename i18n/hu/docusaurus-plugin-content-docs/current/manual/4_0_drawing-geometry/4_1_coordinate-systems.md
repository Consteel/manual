---
sidebar_position: 1
---
# Koordináta rendszerek

<!-- wp:paragraph -->

Az alkalmazott koordinátarendszereknek a helyes modellezésben és az eredmények értelmezésében fontos szerepe van. Ez a fejezet részletesen ismerteti a _Consteel_-ben alkalmazott koordinátarendszereket.

<!-- /wp:paragraph -->

<!-- wp:media-text {"align":"","mediaId":8108,"linkDestination":"media","mediaType":"image","mediaWidth":18,"mediaSizeSlug":"full","verticalAlignment":"top","imageFill":false} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/04/5-2-coord-systems.png)](./img/wp-content-uploads-2021-04-5-2-coord-systems.png)

<!-- wp:paragraph {"placeholder":"Content…"} -->

A _Consteel_-ben a következő két típusú koordinátarendszer használható: Descartes-féle derékszögű (XYZ), és polárkoordináta-rendszer (α, β, L). Polárkoordináta-rendszerben az “α” a pontot az origóval összekötő egyenes "XY" síkra vetített vetületének az „X” tengellyel bezárt szöge, a “β” a pontot az origóval összekötő egyenes és az „XY” sík által bezárt szög, az „L” pedig a pont origóból mért távolsága.

<!-- /wp:paragraph -->

<!-- /wp:media-text -->

<!-- wp:media-text {"align":"","mediaId":8102,"linkDestination":"media","mediaType":"image","mediaWidth":18,"mediaSizeSlug":"full","verticalAlignment":"top","imageFill":false} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/04/5-2-coord-rigth-hand.png)](./img/wp-content-uploads-2021-04-5-2-coord-rigth-hand.png)

<!-- wp:paragraph {"placeholder":"Content…"} -->

Általánosan elmondható, hogy minden Descartes-féle koordinátarendszer (tengelyek iránya, forgatás előjele) a jobb kéz szabályt követi. Ez a szabály érvényesül a geometria és a terhek modellezésénél is. A globális és a lokális rendszerek esetén is a tengelyekkel szembe nézve az órajárásával ellentétes irányú nyomaték a pozitív.

<!-- /wp:paragraph -->

<!-- /wp:media-text -->

<!-- wp:paragraph -->

A továbbiakban az alábbi jelölési rendszert használjuk:

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Globális geometria esetén (3D szerkezeti modellezéskor):

<!-- /wp:paragraph -->

<!-- wp:image {"align":"right","id":8117,"width":230,"height":230,"sizeSlug":"full","linkDestination":"media","className":"is-style-editorskit-rounded"} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/04/5-2-coord-section.jpg)](./img/wp-content-uploads-2021-04-5-2-coord-section.jpg)

<!-- /wp:image -->

<!-- wp:list -->

- X, Y, Z: globális koordinátarendszer
- x, y, z: lokális koordinátarendszer

<!-- /wp:list -->

<!-- wp:paragraph -->

Keresztmetszeteknél (2D szelvénymodell):

<!-- /wp:paragraph -->

<!-- wp:list -->

- v, w: keresztmetszet szerkesztői rendszer
- Y, Z: keresztmetszet súlypontjába eltolt keresztmetszet szerkesztői rendszer
- y, z: keresztmetszet főtengelyi rendszer

<!-- /wp:list -->

<!-- wp:spacer -->

<!-- /wp:spacer -->

<!-- wp:heading {"level":3} -->

### Felhasználói koordinátarendszer, lokális koordináta rendszer

<!-- /wp:heading -->

<!-- wp:image {"align":"right","id":33116,"width":359,"height":246,"sizeSlug":"full","linkDestination":"media","className":"is-style-editorskit-rounded"} -->

[![](https://consteelsoftware.com/wp-content/uploads/2022/02/dial_raszter_es_FKR.png)](./img/wp-content-uploads-2022-02-dial_raszter_es_FKR.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

A **Felhasználói koordinátarendszer** (_FKR_) a könnyebb és gyorsabb modellezést teszi lehetővé. Az FKR egy speciálisan elhelyezett derékszögű koordinátarendszer (XYZ).

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

![](./img/wp-content-uploads-2022-02-ico_FKR.png) A koordinátarendszerek létrehozását és módosítását elősegítő eszközök a bal oldali sávon található _**Raszterháló és koordinátarendszer beállítása**_ gomb megnyomásával érhetők el a megjelenő _**Raszterháló és koordinátarendszer**_ dialógablakon keresztül.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

A Globális és a Felhasználói koordináta rendszerek közötti váltás az alsó állapotsoron található kapcsolóval történik:

<!-- /wp:paragraph -->

<!-- wp:image {"align":"center","id":33123,"width":241,"height":32,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://consteelsoftware.com/wp-content/uploads/2022/02/ico_global-lokal.png)](./img/wp-content-uploads-2022-02-ico_global-lokal.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

A \_**Raszterháló és koordinátarendszer **\_dialógon az első parancsikonnal ![](./img/wp-content-uploads-2021-04-5-2-coord-ico-01.png) a globális koordinátarendszerhez lehet visszatérni. A további parancsikonok balról jobbra haladva:

<!-- /wp:paragraph -->

<!-- wp:list -->

- A koordináta-rendszer origójának áthelyezése ![](./img/wp-content-uploads-2021-04-5-2-coord-ico-02.png)
- FKR váltása a globális „XY” síkra ![](./img/wp-content-uploads-2021-04-5-2-coord-ico-03.png)
- FKR váltása a globális „XZ” síkra ![](./img/wp-content-uploads-2021-04-5-2-coord-ico-04.png)
- FKR váltása a globális „YZ” síkra ![](./img/wp-content-uploads-2021-04-5-2-coord-ico-05.png)
- FKR megadása 3 ponttal: origó, ”X” és “Y” tengelyek iránya ![](./img/wp-content-uploads-2021-04-5-2-coord-ico-06.png)
- FKR tengelyeinek beállítása egy síkidom lokális koordinátarendszerének megfelelően. Az FKR origója a síkidom első pontjába kerül ![](./img/wp-content-uploads-2021-04-5-2-coord-ico-07.png)

<!-- /wp:list -->

<!-- wp:image {"align":"right","id":33131,"width":203,"height":98,"sizeSlug":"full","linkDestination":"media","className":"is-style-editorskit-rounded"} -->

[![](https://consteelsoftware.com/wp-content/uploads/2022/02/cmd_FKR_irany-megforditasa.png)](./img/wp-content-uploads-2022-02-cmd_FKR_irany-megforditasa.png)

<!-- /wp:image -->

<!-- wp:list -->

- FKR „X” tengelyének megadása két ponttal ![](./img/wp-content-uploads-2021-04-5-2-coord-ico-08.png)
- FKR „Y” tengelyének megadása két ponttal ![](./img/wp-content-uploads-2021-04-5-2-coord-ico-09.png)
- FKR „Z” tengelyének megadása két ponttal ![](./img/wp-content-uploads-2021-04-5-2-coord-ico-10.png)
- A kiválasztott tengely irányának megfordítása ![](./img/wp-content-uploads-2021-04-5-2-coord-ico-11.png)

<!-- /wp:list -->

<!-- wp:spacer -->

<!-- /wp:spacer -->

<!-- wp:heading {"level":3} -->

### Rúdelemek lokális koordináta-rendszere

<!-- /wp:heading -->

<!-- wp:paragraph -->

A rúdelemek középvonala határozza meg a rúdelemek lokális koordináta-rendszerének „x” tengelyét. A lokális koordináta-rendszer (LKR) „x” tengelye a rúdelem kezdőpontjából (**J**) mutat a rúdelem végpontjába (**K**).

<!-- /wp:paragraph -->

<!-- wp:media-text {"align":"","mediaId":8272,"linkDestination":"media","mediaType":"image","mediaWidth":23,"mediaSizeSlug":"full","verticalAlignment":"top","imageFill":false} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/04/5-2-coord-bar1.png)](./img/wp-content-uploads-2021-04-5-2-coord-bar1.png)

<!-- wp:paragraph {"placeholder":"Content…"} -->

Alapesetben, ha egy rúd lokális koordináta-rendszerének „x” tengelye egybeesik a globális „X” tengellyel, akkor a rúd lokális “y” és “z” tengelyeinek irányai megegyeznek a globális “Y” és “Z” tengelyek irányával. Rúdelemek keresztmetszetének elhelyezkedése a következő: a keresztmetszet súlypontja illeszkedik a rúdelem középvonalára, és a szelvény „Y” és „Z” koordinátatengelyei egybeesnek a rúdelem lokális „y” és „z” koordináta tengelyeivel.

<!-- /wp:paragraph -->

<!-- /wp:media-text -->

<!-- wp:media-text {"align":"","mediaId":8278,"linkDestination":"media","mediaType":"image","mediaWidth":23,"mediaSizeSlug":"full","verticalAlignment":"top","imageFill":false} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/04/5-2-coord-bar2.png)](./img/wp-content-uploads-2021-04-5-2-coord-bar2.png)

<!-- wp:paragraph {"placeholder":"Content…"} -->

Tetszőleges helyzetű rúd (amely nem egy függőleges helyzetű oszlop) esetén, a rúd lokális „xz” tengelyei által meghatározott sík mindig merőleges a globális „XY” síkra, és a rúd lokális „z” tengelye a globális „Z” tengely irányába mutat. Íves rudak esetén a rúd lokális koordináta-rendszerének “x” tengelye a mindenkori érintő.

<!-- /wp:paragraph -->

<!-- /wp:media-text -->

<!-- wp:media-text {"align":"","mediaId":8284,"linkDestination":"media","mediaType":"image","mediaWidth":23,"mediaSizeSlug":"full","verticalAlignment":"top","imageFill":false} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/04/5-2-coord-bar3.png)](./img/wp-content-uploads-2021-04-5-2-coord-bar3.png)

<!-- wp:paragraph {"placeholder":"Content…"} -->

Ha a rúd középvonala függőleges (oszlopok esetében), akkor a rúd lokális „y” tengelyének iránya megegyezik a globális „Y” tengellyel. A lokális „z” tengely iránya az oszlop "x" tengelyének irányától (a kezdő és a végpont helyzetétől) függ.

<!-- /wp:paragraph -->

<!-- /wp:media-text -->

<!-- wp:media-text {"align":"","mediaId":8290,"linkDestination":"media","mediaType":"image","mediaWidth":23,"mediaSizeSlug":"full","verticalAlignment":"top","imageFill":false} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/04/image-3.png)](./img/wp-content-uploads-2021-04-image-3.png)

<!-- wp:paragraph {"placeholder":"Content…"} -->

Rúdigénybevételek értelmezése és előjele a rúd lokális koordinátarendszere alapján történik az ábrának megfelelően

<!-- /wp:paragraph -->

<!-- /wp:media-text -->

<!-- wp:spacer -->

<!-- /wp:spacer -->

<!-- wp:heading {"level":3} -->

### Síkidomok lokális koordinátarendszere

<!-- /wp:heading -->

<!-- wp:image {"align":"right","id":8296,"width":365,"height":289,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/04/5-2-coord-surf.png)](./img/wp-content-uploads-2021-04-5-2-coord-surf.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

Síkidomok lokális koordinátarendszere (LKR) által meghatározott „xy” sík megegyezik a síkidom síkjával, a „z” tengely pedig merőleges a síkra, illetve iránya a jobb kéz szabálynak megfelelően alakul. A síkidomok lokális koordináta tengelyeit meghatározó szabályok:

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Derékszögű négyszög síkidomok létrehozása esetén:

<!-- /wp:paragraph -->

<!-- wp:list -->

- az “x” és “y” tengelyek iránya párhuzamos a síkidom éleivel. A “z” tengely iránya pedig a jobbkéz szabály szerinti.

<!-- /wp:list -->

<!-- wp:paragraph -->

Sokszög síkidomok létrehozása esetén:

<!-- /wp:paragraph -->

<!-- wp:list -->

- az “x” párhuzamos az első és második pont által meghatározott oldaléllel, ami a síkidom első oldaléle,
- az “y” tengely a harmadik megadott pont által meghatározott irányba mutat. Ez a pont határozza meg a poligon második oldalélét,
- a “z” tengely iránya a jobbkéz szabály szerint alakul.

<!-- /wp:list -->

<!-- wp:spacer {"height":"20px","editorskit":{"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false},"editorskit_typography":{"name":"","family":"","weight":""},"extUtilities":[]} -->

<!-- /wp:spacer -->

<!-- wp:image {"align":"right","id":33150,"width":320,"height":102,"sizeSlug":"full","linkDestination":"media","className":"is-style-editorskit-rounded"} -->

[![](https://consteelsoftware.com/wp-content/uploads/2022/02/dial_lokalis_koord_modositasa.png)](./img/wp-content-uploads-2022-02-dial_lokalis_koord_modositasa.png)

<!-- /wp:image -->

<!-- wp:heading {"level":3} -->

### Lokális koordináta-rendszerek módosítása

<!-- /wp:heading -->

<!-- wp:paragraph -->

Szerkezeti elemek lokális koordináta-rendszerének irányát meg lehet változtatni a _**Szerkezeti elemek**_ fülön található _**Lokális koordináta rendszerek beállítása**_ ![](./img/wp-content-uploads-2021-04-5-2-coord-ico-12.png) parancsikon segítségével. A megnyíló, azonos nevű ablak tartalmazza a funkció összes parancsát.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Első lépésben ki kell választani, hogy rúd ![](./img/wp-content-uploads-2021-04-5-2-coord-ico-13.png), felület ![](./img/wp-content-uploads-2021-04-5-2-coord-ico-14.png) vagy pontbeli támasz ![](./img/wp-content-uploads-2021-04-5-2-coord-ico-15.png) lokális koordináta rendszerét akarjuk módosítani. Ezután ki kell jelölni a módostani kívánt eleme(ke)t, majd a kívánt módosításhoz tartozó parancsikonra kell kattintani, majd az információs sávban ![](./img/wp-content-uploads-2022-02-ico_info_mezo.png) megjelenő utasításnak megfelelően a modelltérben történő egérkattintással meg kell adni az irányvektort vagy -pontot, amit elvégezve megtörténik a LKR módosítása. A módosítási lehetőségek parancsikonjai (balról jobbra haladva) az alábbiak:

<!-- /wp:paragraph -->

<!-- wp:list -->

- az "X" tengely irányának megadása irányvektorral ![](./img/wp-content-uploads-2022-02-ico_LKR_mod_vektor_X.png)
- az "Y" tengely irányának megadása irányvektorral ![](./img/wp-content-uploads-2022-02-ico_LKR_mod_vektor_Y.png)
- az "Z" tengely irányának megadása irányvektorral ![](./img/wp-content-uploads-2022-02-ico_LKR_mod_vektor_Z.png)
- az "X" tengely irányának megadása irányponttal ![](./img/wp-content-uploads-2021-04-5-2-coord-ico-16.png)
- az "Y" tengely irányának megadása irányponttal ![](./img/wp-content-uploads-2021-04-5-2-coord-ico-17.png)
- az "Z" tengely irányának megadása irányponttal ![](./img/wp-content-uploads-2021-04-5-2-coord-ico-18.png)
- az "X" tengely irányának megfordítása ![](./img/wp-content-uploads-2022-02-ico_LKR_mod_megford_X.png)
- az "Y" tengely irányának megfordítása ![](./img/wp-content-uploads-2022-02-ico_LKR_mod_megford_Y.png)
- az "Z" tengely irányának megfordítása ![](./img/wp-content-uploads-2022-02-ico_LKR_mod_megford_Z.png)
- A lokális Z tengely beállítása a kapcsolódó rudak által alkotott felületre merőlegesen ![](./img/wp-content-uploads-2021-04-5-2-coord-ico-19.png) (Egyszer görbült felületek rúdelemein alkalmazható).

<!-- /wp:list -->
