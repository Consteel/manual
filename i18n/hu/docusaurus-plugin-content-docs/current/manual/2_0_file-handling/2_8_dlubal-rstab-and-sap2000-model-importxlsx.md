---
sidebar_position: 8
---
# Dlubal rstab és SAP2000 modell beolvasás (xlsx)

<!-- wp:paragraph -->

A Consteel képes modell adatok beolvasására Excel formátumú fájlokból, ahol a különböző modell adatok különböző munkalapokon vannak tárolva. Ezek a táblázat fájlok a fenti szoftverekkel létrehozhatóak.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

A modell adatok importálásához a _**Fájl**_ menü _**Import**_ opciójára kell kattintani. A legördülő menüből kiválasztható, a _**DLUBAL (xlsx)**_ vagy _**SAP2000 (xlsx)**_ opció. Az adatok importálása mindkét szoftverben ugyanúgy működik. A megfelelő import funkció kiválasztása után az alábbi _**Import**_ dialóg jelenik meg:

<!-- /wp:paragraph -->

<!-- wp:image {"align":"center","id":32461,"width":326,"height":465,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://Consteelsoftware.com/wp-content/uploads/2022/02/dlubal_import.png)](./img/wp-content-uploads-2022-02-dlubal_import.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

Az importálás folyamat az alábbi:

<!-- /wp:paragraph -->

<!-- wp:list -->

- A beolvasni kívánt fájl elérési útját a \_Fájlnév \_mező utáni (![](./img/wp-content-uploads-2021-04-3-7-Dlubal-open.png)) ikonra kattintva adhatjuk meg

- Alatta a modell mértékegységét (mm/cm/m) kell megadni

- A modell Z tengelyének iránya lehet +Z vagy -Z

- Végül a következő modell adatok importálhatók:

  - Keresztmetszetek (keresztmetszeti paraméterek, forgatás, excentricitás)
  - Csomóponti támaszok (forgatás, excentricitás)
  - Terhelési esetek
  - Csomóponti terhek
  - Koncentrált terhek szerkezeti elemeken
  - Vonalmenti terhek

<!-- /wp:list -->

<!-- wp:paragraph -->

Fontos tudni, hogy csak azon adatokat jelöljük be a fenti módon, melyeknek megfelelő adatok az xls fájlban elérhetők, vagyis amely adatokat a modell tartalmazza.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

A beállítások elvégzése után a _**Rendben**_ gombra kattintva az importálási folyamat az _**Import szelvénykezelő**_ ablakának megjelenésével folytatódik. Az ablak felső két sorában a szelvény és az anyagminőség konverziós fájljait lehet megnyitni és akár módosítani, alatta pedig manuálisan módosíthatók az xls fájlból beolvasott anyagminőségek és keresztmetszetek.

<!-- /wp:paragraph -->

<!-- wp:image {"align":"center","id":32468,"width":458,"height":502,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://Consteelsoftware.com/wp-content/uploads/2022/02/dlubal_import_konv.png)](./img/wp-content-uploads-2022-02-dlubal_import_konv.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

Változtatás esetén az adatok a mentés (![](./img/wp-content-uploads-2021-04-Icon-save.png)) gomb segítségével elmenthetők későbbi felhasználás céljából. A _**Rendben**_ gomb megnyomásával az importált modell megjelenik a modell ablakban.

<!-- /wp:paragraph -->

<!-- wp:columns -->

<!-- wp:column {"verticalAlignment":"center","width":"10%"} -->

<!-- wp:image {"align":"right","id":21420,"width":91,"height":97,"sizeSlug":"full","linkDestination":"none"} -->

:::warning Fontos

<!-- /wp:image -->

<!-- /wp:column -->

<!-- wp:column {"verticalAlignment":"center","width":"90%"} -->

<!-- wp:paragraph -->

Fontos tudni, hogy csak az angol nyelven létrehozott xlsx modell export fájlokkal működik a beolvasás.
:::

<!-- /wp:column -->

<!-- /wp:columns -->
