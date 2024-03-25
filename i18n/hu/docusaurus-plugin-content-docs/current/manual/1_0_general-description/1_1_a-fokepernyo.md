---
title: 'A Főképernyő'
description: ""
published: 2022-02-07
redirect_from: 
            - https://www.consteelsoftware.com/hu/manual/altalanos-ismertetes/a-fokepernyo/
hero: ./img/wp-content-uploads-2021-04-Main-window-numbers-1-1024x555.png
---
<!-- wp:paragraph -->

A főképernyő hét fő részből áll:

<!-- /wp:paragraph -->

<!-- wp:image {"align":"center","id":6857,"width":"1024px","height":"555px","sizeSlug":"large","linkDestination":"media","className":"is-style-default"} -->

[![](./img/wp-content-uploads-2021-04-Main-window-numbers-1-1024x555.png)](https://consteelsoftware.com/wp-content/uploads/2021/04/Main-window-numbers-1.png)

<!-- /wp:image -->

<!-- wp:list -->

- <!-- wp:list-item -->
- A legnagyobb méretű rész, a **[grafikus ablak](#Grafikus-ablak) **(#1), ami a 3 dimenziós modell elkészítésére, megjelenítésére szolgál.
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- A felső **[főmenü ](#fomenu)**tartalmazza az alapvető parancsokat (#2)
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- A tervezés menetének megfelelő sorrendben elhelyezett **[füleken ](#fulek)**találhatóak az egyes lépések során használatos funkciók. (#3)
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- A **[bal oldali sáv](#oldalsav)** (#3) tartalmazza a modellezés során legtöbbször használt funkciókat: pl.: raszter-, koordináta-rendszer-, és nézetváltoztatás, objektumok kijelölése, mozgatása/másolása.
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- A **[Descript ](#Descript-szerkesztő)**felugró panel a parametrikus programozásra szolgál (#5)
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- A képernyő alján található **[állapotsávon ](#allapotsor)**(#6) érhetőek el a modellezést segítő beállítási lehetőségek és a különböző objektumok, adatok láthatóságát szabályozó kapcsolók.
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- A **[jobb oldali paneleken](#oldalpanel)** (#7) fent az objektum ablak biztosítja a modell gyors áttekintését, és a részmodellek kezelési funkcióit is. Alatta található, a kiválasztott objektumok paramétereit tartalmazó ablak, amely a paraméterek áttekintését és gyors módosítását teszi lehetővé.
- <!-- /wp:list-item -->

<!-- /wp:list -->

<!-- wp:spacer -->

<!-- /wp:spacer -->

<!-- wp:heading {"level":3} -->

### Grafikus ablak

<!-- /wp:heading -->

<!-- wp:columns -->

<!-- wp:column {"width":"95%"} -->

<!-- wp:paragraph {"align":"justify"} -->

A 3D modell megjelenítése történik a grafikus ablakban. A megjelenítési módok széleskörűen változtathatók. A grafikus ablak a globális koordináta-rendszer (_GKR_) tengelyeinek bal alsó sarokban történő kijelzésével, a mozgatható, forgatható és átméretezhető raszter hálóval a rajzolást és a modellezést nagyban segíti. A [**_globális koordináta-rendszer (GKR)_**](/hu/manual/geometria-rajzolasa/koordinata-rendszerek/) helyzete és tengelyirányai nem változtathatóak. A **_[felhasználói koordináta-rendszer (FKR)](https://consteelsoftware.com/hu/manual/geometria-rajzolasa/koordinata-rendszerek/#felhasznaloi-koordinatarendszer-lokalis-koordinata-rendszer)_** középpontja mindig a raszter háló középpontjában helyezkedik el, illetve a raszter háló síkja az _FKR_ „XY” síkjával esik egybe. Szerkesztés ás modellezés során az alábbi mozgatási és gyors nézet beállítások, használhatóak:

<!-- /wp:paragraph -->

<!-- wp:list -->

- <!-- wp:list-item -->

- \***\*A képernyőablak mozgatása\*\***: a középső egérgomb lenyomva tartása mellett az egér mozgatásával, vagy a billentyűzet nyíl billentyűinek használatával

- <!-- /wp:list-item -->

-

* <!-- wp:list-item -->

* \***\*Nézet forgatása\*\***: az Alt billentyű és bal egérgomb nyomva tartása mellett az egérmozgatásával. A forgatás középpontja mindig az adott nézet középpontjával egyezik meg

* <!-- /wp:list-item -->

*

- <!-- wp:list-item -->

- \***\*Nagyítás, kicsinyítés\*\***: középső egérgomb (görgő) forgatásával vagy a + és - gombokkal, illetve az Alt billentyű és a jobb egérgomb egyidejű lenyomásával és mozgatásával

- <!-- /wp:list-item -->

-

* <!-- wp:list-item -->

* \***\*Ablakos nagyítás\*\***: Shift+Alt billentyűk lenyomása mellett, a bal egérgombbal történő ablakos kijelöléssel

* <!-- /wp:list-item -->

*

- <!-- wp:list-item -->

- \***\*Nézetváltás 5 gyorsbillentyű parancsa\*\***:

  <!-- wp:list -->

  - <!-- wp:list-item -->
  - **Ctrl+1**: **Felülnézet**
  - <!-- /wp:list-item -->
  -
  - <!-- wp:list-item -->
  - **Ctrl+2**: **Elölnézet**
  - <!-- /wp:list-item -->
  -
  - <!-- wp:list-item -->
  - **Ctrl+3**: **Oldalnézet**
  - <!-- /wp:list-item -->
  -
  - <!-- wp:list-item -->
  - **Ctrl+4**: **Axonometria**
  - <!-- /wp:list-item -->
  -
  - <!-- wp:list-item -->
  - **Ctrl+5**: Aktuális raszter síkra **merőleges nézet**
  - <!-- /wp:list-item -->
  -
  - <!-- wp:list-item -->
  - **Ctrl+0**: **Teljes nézet**
  - <!-- /wp:list-item -->

  <!-- /wp:list -->

- <!-- /wp:list-item -->

<!-- /wp:list -->

<!-- /wp:column -->

<!-- /wp:columns -->

<!-- wp:spacer -->

<!-- /wp:spacer -->

<!-- wp:heading {"level":3} -->

### A menü

<!-- /wp:heading -->

<!-- wp:paragraph {"align":"justify"} -->

A _Consteel_ menüi tartalmazzák az összes parancsot. A legtöbb funkció a füleken és az oldalsávokon elhelyezett ikonokkal érhetőek el. A menüsoron 6 fontos funkciócsoport található: **_[Fájl ](#File-menu)_**műveletek, néhány **_[Szerkesztési ](#Edit-menu)_**opció (visszavonás-ismétlés), **_[Nézet ](#View-menu)_**beállítások és diagnosztika, **_[Op](http://xxx)[c](#Options-menu)[iók ](http://xxx)_**a beállításhoz (mentés, programfrissítés, program nyelv és modell diagnosztika), **_[Szabványok ](#Standards-menu)_**a tervezési paraméterek áttekintése és új paraméterek létrehozása, és a **_[Súgó](#sugo-menu)_**. A Consteel 14 és Consteel 15 bizonyos menüi eltérnek egymástól. A menüpont után zárójelben van jelezve, melyik verzióra érvényes.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Fájl menü

<!-- /wp:heading -->

<!-- wp:columns -->

<!-- wp:column {"verticalAlignment":"center"} -->

<!-- wp:image {"align":"center","id":31052,"sizeSlug":"full","linkDestination":"none"} -->

![](./img/wp-content-uploads-2022-01-cs14_menu_file_hu.png)

Consteel 14

<!-- /wp:image -->

<!-- /wp:column -->

<!-- wp:column -->

<!-- wp:image {"align":"center","id":31066,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://www.consteelsoftware.com/wp-content/uploads/2022/01/menu_file_hu.png)](./img/wp-content-uploads-2022-01-menu_file_hu.png)

Consteel 15

<!-- /wp:image -->

<!-- /wp:column -->

<!-- /wp:columns -->

<!-- wp:paragraph -->

_Project Center_ (CS15)

<!-- /wp:paragraph -->

<!-- wp:paragraph {"editorskit":{"indent":60,"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

A **_[Project Center](https://consteelsoftware.com/hu/manual/altalanos-ismertetes/a-szoftver-telepitese-es-futtatasa/#cs15projectcenter)_**-t lehet innen megnyitni.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

_Új modell_...

<!-- /wp:paragraph -->

<!-- wp:paragraph {"editorskit":{"indent":60,"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

Új modell létrehozása egy új Consteel példány elindításával. (Minden modell külön Consteel példányban fut.)

<!-- /wp:paragraph -->

<!-- wp:image {"align":"right","id":31108,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://www.consteelsoftware.com/wp-content/uploads/2022/01/modell_attrib.png)](./img/wp-content-uploads-2022-01-modell_attrib.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

**Modell attribútum**

<!-- /wp:paragraph -->

<!-- wp:paragraph {"editorskit":{"indent":60,"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

A modell rövid leírása és a tervezési szabvány adható meg, illetve változtatható meg. A modell ezen adatai munka során bármikor módosíthatók.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

_Legutóbbi modellek_ (CS15)

<!-- /wp:paragraph -->

<!-- wp:paragraph {"editorskit":{"indent":60,"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

Megnyitja a **_[Project Center](https://consteelsoftware.com/hu/manual/altalanos-ismertetes/a-szoftver-telepitese-es-futtatasa/#cs15projectcenter)_** legutóbbi modellek nézetét.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

_Megnyitás (CS14) és Megnyitás a számítógépről (CS15)_

<!-- /wp:paragraph -->

<!-- wp:paragraph {"editorskit":{"indent":60,"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

A normál Windows file megnyitási dialóg jelenik meg.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

_Megnyitás a felhőből _(Beta) (CS15)

<!-- /wp:paragraph -->

<!-- wp:paragraph {"editorskit":{"indent":60,"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

Megnyitja a felhő tárhelyet. A felhő szolgáltatásokat a Steelspace platform biztosítja. További információ: _[**Felhőszolgáltatások**](https://consteelsoftware.com/hu/manual/altalanos-ismertetes/a-szoftver-telepitese-es-futtatasa/#cs15cloudopen)_

<!-- /wp:paragraph -->

<!-- wp:image {"align":"right","id":27768,"width":"219px","height":"171px","sizeSlug":"full","linkDestination":"media"} -->

[![](https://www.consteelsoftware.com/wp-content/uploads/2021/11/Save_as_cloud-local.png)](./img/wp-content-uploads-2021-11-Save_as_cloud-local.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

_Mentés_

<!-- /wp:paragraph -->

<!-- wp:paragraph {"editorskit":{"indent":60,"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

Elmenti a modellt a korábban megadott helyre. A Consteel 15 esetében, az első mentés előtt egy felugró ablakban választani kell lokális és felhő mentés között.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

M*entés másként...*

<!-- /wp:paragraph -->

<!-- wp:paragraph {"editorskit":{"indent":60,"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

Elmenti a modellt új néven, új helyre.

<!-- /wp:paragraph -->

<!-- wp:paragraph {"editorskit":{"indent":60,"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

Saves the model in another storage space. A Consteel 15 esetében, a mentés előtt egy felugró ablakban választani kell lokális és felhő mentés között.

<!-- /wp:paragraph -->

<!-- wp:paragraph {"editorskit":{"indent":60,"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

Lokális mentést választva a szokásos Windows '_Fájl mentése_' párbeszédablak jelenik meg..

<!-- /wp:paragraph -->

<!-- wp:paragraph {"editorskit":{"indent":60,"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

Felhő mentést (Beta) választva a Steelspace által szolgáltatott felhőtárhely modell könyvtára jelenik meg, ahová el lehet menteni a modellt. További információ: [**Cloud save**](https://consteelsoftware.com/hu/manual/fajlkezeles/felhotarhely-szolgaltatasok/#cs15cloudsave)

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

_Megosztás (Beta)(CS15)_

<!-- /wp:paragraph -->

<!-- wp:paragraph {"editorskit":{"indent":60,"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

A felhőbe mentett modellek megoszthatók más Consteel-felhasználókkal, akik rendelkeznek online fiókkal. A megosztással kapcsolatos további részletek itt találhatók: _[**modell megosztás**](https://consteelsoftware.com/hu/manual/fajlkezeles/felhotarhely-szolgaltatasok/#cs15sharing)_.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

_Import_

<!-- /wp:paragraph -->

<!-- wp:image {"align":"left","id":31121,"sizeSlug":"medium","linkDestination":"media"} -->

[![](./img/wp-content-uploads-2022-01-menu_file_import_hu-300x229.png)](https://consteelsoftware.com/wp-content/uploads/2022/01/menu_file_import_hu.png)

<!-- /wp:image -->

<!-- wp:paragraph {"editorskit":{"indent":60,"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

Az Import menü számos modell importálási lehetőséget tartalmaz, a legegyszerűbb DXF formátumú drótváz importálásától, a széles körben használt IFC-n keresztül egészen a teljes, terhelést is magában foglaló Dlubal és SAP2000 modellek importálásáig. További infó: **_[Fájlkezelés](/manual/fajlkezeles/)_**.

<!-- /wp:paragraph -->

<!-- wp:spacer {"height":"1px"} -->

<!-- /wp:spacer -->

<!-- wp:paragraph -->

_Export_

<!-- /wp:paragraph -->

<!-- wp:image {"align":"left","id":27751,"width":"295px","height":"218px","sizeSlug":"full","linkDestination":"media"} -->

[![](https://www.consteelsoftware.com/wp-content/uploads/2021/04/2-2-File-export-1.png)](./img/wp-content-uploads-2021-04-2-2-File-export-1.png)

<!-- /wp:image -->

<!-- wp:paragraph {"editorskit":{"indent":60,"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

A funkciók segítségével, a kiválasztott modellrész kiexportálható _TEKLA Structures_ programba vagy IFC formátumban, illetve számított födém vasmennyiség esetén, a színezett eredménymegjelenítés kiexportálható DXF formátumba. További infó: **_[Fájlkezelés](/manual/fajlkezeles/)_**.

<!-- /wp:paragraph -->

<!-- wp:spacer {"height":"1px"} -->

<!-- /wp:spacer -->

<!-- wp:paragraph -->

_Update_

<!-- /wp:paragraph -->

<!-- wp:paragraph {"editorskit":{"indent":60,"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

Csatlakoztatott Tekla modell esetén (korábbi Tekla export vagy import után), a Consteel modell változásainak megfelelően frissíthető a Tekla modell ezzel a paranccsal. További információ: **_[Tekla model update](/manual/fajlkezeles/tekla-structures-modellek-importalasa-exportalasa-es-frissitese/#tekla-update)_**.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Edit menü

<!-- /wp:heading -->

<!-- wp:image {"align":"left","id":31080,"sizeSlug":"full","linkDestination":"none"} -->

![](./img/wp-content-uploads-2022-01-menu_szerk_hu.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

Szokásos Windows szolgáltatások, amelyek nem igényelnek különösebb magyarázatot. A Kivágás, Másolás és Beillesztés parancsok csak a táblázatokban használhatók.

<!-- /wp:paragraph -->

<!-- wp:spacer {"height":"1px"} -->

<!-- /wp:spacer -->

<!-- wp:heading {"level":4} -->

#### Nézet menü

<!-- /wp:heading -->

<!-- wp:paragraph -->

**Consteel 17**

<!-- /wp:paragraph -->

<!-- wp:image {"id":71855,"width":"226px","height":"auto","sizeSlug":"full","linkDestination":"none"} -->

![](./img/wp-content-uploads-2024-01-1.2.2.3.-CS17-View-menu-HU.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

A többi ablak mellett a **Modell tartalma** ablak is külön be- és kikapcsolható a **Részletmodellek **ablaktól függetlenül.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

**Consteel 16**

<!-- /wp:paragraph -->

<!-- wp:image {"align":"left","id":31073,"sizeSlug":"full","linkDestination":"none"} -->

![](./img/wp-content-uploads-2022-01-menu_nezet_hu.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

A nézet funkciók segítségével megjeleníthető vagy kikapcsolható az **Objektumfa **és az **Objektumok tulajdonsága** ablakok (Oldalpanel), valamint a **Státusz sor**, a **Diagnosztika** ablak, az **Analízis visszajelzések**, illetve a **Descript **felülete.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Az **Objektum méretei…** funkcióval az alábbi objektumok megjelenítési méretei állíthatóak be:

<!-- /wp:paragraph -->

<!-- wp:image {"align":"center","id":31150,"sizeSlug":"full","linkDestination":"none"} -->

![](./img/wp-content-uploads-2022-01-objekt_meretei_hu.png)

<!-- /wp:image -->

<!-- wp:heading {"level":4} -->

#### Opciók menü

<!-- /wp:heading -->

<!-- wp:paragraph -->

Az Opciók menüben a következő beállítási lehetőségek találhatóak:

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

**Consteel 17**

<!-- /wp:paragraph -->

<!-- wp:image {"id":71885,"width":"404px","height":"auto","sizeSlug":"full","linkDestination":"none"} -->

![](./img/wp-content-uploads-2024-01-Options-menu-HU-CS17.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

**Consteel 16**

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

_**Mentés**_, _**Frissítés**_, _**Nyelv, Háttérszín, Stílusok, Diagnosztika**_ és _**Idea StatiCa átmenet**_.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

**Consteel 15**

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

**_Mentés_**, **_Frissítés_**, **_Nyelv_**, **_Stílusok_**, **_Diagnosztika_** és **_Idea StatiCa átmenet_**.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

_Mentés_

<!-- /wp:paragraph -->

<!-- wp:image {"align":"left","id":31094,"width":"322px","height":"221px","sizeSlug":"full","linkDestination":"media"} -->

[![](https://www.consteelsoftware.com/wp-content/uploads/2022/01/options_hu.png)](./img/wp-content-uploads-2022-01-options_hu.png)

Opciók menü - Mentés

<!-- /wp:image -->

<!-- wp:paragraph -->

Ha az **Automatikus mentés** funkció be van kapcsolva, a program a megadott időközönként automatikus mentéseket készít. Ha a **Biztonsági másolat** funkció be van kapcsolva, akkor a _Consteel_ biztonsági másolatot hoz létre a modellről, _de csak az első manuális mentést követően_! A biztonsági mentési fájl tartalma azonos a mentéskori modellfájl tartalmával, a fájl kiterjesztése azonban a .bak kiterjesztéssel bővül, melynek eltávolításával a biztonsági mentési fájl a \_Consteel-\_ba betölthető.

<!-- /wp:paragraph -->

<!-- wp:paragraph {"editorskit":{"indent":60,"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

**Korábbi modellek konvertálása az aktuális verzióba** (csak a 14-es verziótól)

<!-- /wp:paragraph -->

<!-- wp:paragraph {"editorskit":{"indent":60,"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

Ha a biztonsági másolat funkció aktív, valamely korábbi verzióban készült modell aktuális Consteel verzióban történő első elmentésekor automatikusan készül egy biztonsági másolat az eredeti verzió formátumában. Ennek a másolatnak a fájlneve az alábbi séma alapján jön létre: \_modell_fájl_név – Consteel XX.bak (\_ahol XX = az adott verzió száma).

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

_Részletmodellek kijelölésének megtartása (csak a 17-es verziótól)_

<!-- /wp:paragraph -->

<!-- wp:image {"id":71865,"width":"191px","height":"auto","sizeSlug":"full","linkDestination":"none"} -->

![](./img/wp-content-uploads-2024-01-Options-keep-portion-HU-CS17.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

A részletmodellek kijelölésének megtartása funkció segítségével a felhasználó megőrizheti ugyanazt a részletmodell kiválasztást, amikor, ha bezárja és újra megnyitja a modellt, feltéve, hogy azt korábban elmentette. Ellenben a modell újbóli megnyitásakor teljes nézet jelenik meg.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

_Frissítés_

<!-- /wp:paragraph -->

<!-- wp:image {"align":"left","id":31087,"sizeSlug":"medium","linkDestination":"media"} -->

[![](./img/wp-content-uploads-2022-01-options_frissites_hu-300x206.png)](https://consteelsoftware.com/wp-content/uploads/2022/01/options_frissites_hu.png)

Opciók menü - Frissítés

<!-- /wp:image -->

<!-- wp:paragraph {"editorskit":{"indent":60,"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

A frissítése funkció minden indításkor ellenőrzi az interneten, hogy elérhető-e újabb verzió. Ez a funkció itt kikapcsolható. Az ellenőrzés manuálisan is elvégezhető a **Frissítés keresése most **(![](./img/wp-content-uploads-2021-04-2-2-Search-update.png) ) ikonra kattintva..

<!-- /wp:paragraph -->

<!-- wp:paragraph {"editorskit":{"indent":60,"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

\***\*Felhasználói élmény fokozása\*\***

<!-- /wp:paragraph -->

<!-- wp:paragraph {"align":"justify","editorskit":{"indent":40,"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

Azért, hogy termékeink minél jobban megfeleljenek a felhasználóink elvárásainak, a szoftverjeink a használat során anonim információkat gyűjtenek és küldenek arról, hogy felhasználóink miként használják a Consteel és csJoint programokat. A Consteel Solutions Zrt. ezeket az adatokat a termékek továbbfejlesztése, illetve problémamegoldás céljából használja.

<!-- /wp:paragraph -->

<!-- wp:paragraph {"editorskit":{"indent":60,"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

A termékeink az alábbi információkat gyűjtik és küldik el: verzióinformáció, használt funkciók, használati időtartam, földrajzi hely. A küldött információk semmilyen személyes adatot nem tartalmaznak (például név, cím, telefon), a felhasználók azonosítására a Consteel Solutions Zrt. nem használja. Kereskedelmi Consteel és csJoint verziók esetén az információk gyűjtése kikapcsolható az Opciók/Frissítés menüpontban. Kipróbálási és diák verziók esetén az információküldés nem kapcsolható ki.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

_Nyelv_

<!-- /wp:paragraph -->

<!-- wp:image {"align":"left","id":31175,"sizeSlug":"medium","linkDestination":"media"} -->

[![](./img/wp-content-uploads-2022-01-options_nyelv_hu-300x206.png)](https://consteelsoftware.com/wp-content/uploads/2022/01/options_nyelv_hu.png)

Opciók menü - Nyelv

<!-- /wp:image -->

<!-- wp:paragraph -->

Itt állítható be a felhasználói felület nyelve, ami a következő nyelvek közül választható: magyar, angol, német, spanyol, olasz, görög, portugál, orosz, kínai, török, lengyel, szlovák, szlovén, román, bolgár, szerb és horvát.

<!-- /wp:paragraph -->

<!-- wp:paragraph {"editorskit":{"indent":60,"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

A felhasználói felület nyelvének változtatása a program újraindítását követően érvényesül.

<!-- /wp:paragraph -->

<!-- wp:spacer {"height":"1px"} -->

<!-- /wp:spacer -->

<!-- wp:paragraph -->

_Háttérszín_ (Consteel 16-tól)

<!-- /wp:paragraph -->

<!-- wp:image {"align":"left","id":51705,"width":"300px","height":"206px","sizeSlug":"full","linkDestination":"media","className":"is-style-default"} -->

[![Opciók párbeszédablak - háttérszín](https://www.consteelsoftware.com/wp-content/uploads/2023/01/Opciok_dialog_hatterszin_j.png)](./img/wp-content-uploads-2023-01-Opciok_dialog_hatterszin_j.png)

Opciók menü - Háttérszín

<!-- /wp:image -->

<!-- wp:paragraph {"editorskit":{"indent":60,"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

A modell képernyő háttérszíne állítható itt be.

<!-- /wp:paragraph -->

<!-- wp:spacer {"height":"1px"} -->

<!-- /wp:spacer -->

<!-- wp:paragraph -->

_Stílusok_

<!-- /wp:paragraph -->

<!-- wp:image {"align":"left","id":31182,"sizeSlug":"medium","linkDestination":"media"} -->

[![](./img/wp-content-uploads-2022-01-options_stilus_hu-300x206.png)](https://consteelsoftware.com/wp-content/uploads/2022/01/options_stilus_hu.png)

Opciók menü - Stílusok

<!-- /wp:image -->

<!-- wp:paragraph {"editorskit":{"indent":60,"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

A különböző objektumok színeit lehet megadni.

<!-- /wp:paragraph -->

<!-- wp:spacer {"height":"1px"} -->

<!-- /wp:spacer -->

<!-- wp:paragraph -->

_Diagnosztika_

<!-- /wp:paragraph -->

<!-- wp:image {"align":"left","id":31168,"sizeSlug":"medium","linkDestination":"media"} -->

[![](./img/wp-content-uploads-2022-01-options_diag_hu-300x206.png)](https://consteelsoftware.com/wp-content/uploads/2022/01/options_diag_hu.png)

Opciók menü - Diagnosztika

<!-- /wp:image -->

<!-- wp:paragraph {"editorskit":{"indent":60,"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

Analízis indítása előtt, a program ellenőrzi az esetleges modellezési hibákat. Két jelzési szint létezik, amivel a program figyelmeztetheti a felhasználót az esetleges modellezési hibákról:

<!-- /wp:paragraph -->

<!-- wp:list -->

- <!-- wp:list-item -->
- **Hiba: **ha két rúd vagy objektum végpontjainak távolsága 0 és a beállított érték közé esik, a program hibaüzenetet küld, a diagnosztika ablakban piros jelzéssel felsorolja ezeket az elemeket és nem hatja végre a kért analízist.
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- \***\*Figyelmeztetés:** \*\*ha két rúd vagy objektum végpontjainak távolsága a hiba beállításnál megadott érték és a figyelmeztetés beállításnál megadott érték közé esik, a program figyelmeztető üzenetet küld és a diagnosztika ablakban sárga jelzéssel felsorolja ezeket az elemeket.
- <!-- /wp:list-item -->

<!-- /wp:list -->

<!-- wp:paragraph -->

További infót ld. még: **_[Modellvizsgálat ](/hu/manual/szerkezetek-analizise/modell-ellenorzes-diagnosztika/)_**és _**[Diagnosztika ablak](#Diagnostic-window)**_

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

_Teherszétosztás_

<!-- /wp:paragraph -->

<!-- wp:image {"id":71875,"width":"459px","height":"auto","sizeSlug":"full","linkDestination":"none"} -->

![](./img/wp-content-uploads-2024-01-Options-menu-HU-CS17-load-distribution.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

Consteel 17-től ez a funkció a **Modell beállítások** kategóriához tartozik, együtt a **Diagnosztikával**.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Az Automatikus **teherszétosztás** kikapcsolható a modellezés sebességének növelése érdekében.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Általában a szoftver automatikusan elosztja a felületi terheket a teher átadó felület segítségével, és az elosztás azonnal megtörténik bármilyen változás után, amely azt indokolja.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Nagy modellek esetén, amelyek több teher átadó felülettel rendelkeznek, ez lassíthatja a modellezési folyamatot. Az automatikus teherszétosztás kikapcsolása a modellezés idejére felgyorsíthatja a folyamatot.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Fontos megjegyezni, hogy amikor ez a funkció ki van kapcsolva, a vonalmenti megoszló teher már nem érvényesek egy új TÁF vagy a felületi teher változásakor. Ennek eredményeként a modellt ebben az állapotban nem lehet analízisnek alávetni. Egy diagnosztika figyelmeztetés jelenik meg. A terhek frissítéséhez, jelölje be a jelölőnégyzetet, vagy kattintson a Diagnosztika figyelmeztetés alatt megjelenő Frissítés gombra.

<!-- /wp:paragraph -->

<!-- wp:spacer {"height":"1px"} -->

<!-- /wp:spacer -->

<!-- wp:paragraph -->

_IDEA StatiCa átmenet_

<!-- /wp:paragraph -->

<!-- wp:image {"align":"left","id":31101,"sizeSlug":"medium","linkDestination":"media"} -->

[![](./img/wp-content-uploads-2022-01-options_idea_hu-300x206.png)](https://consteelsoftware.com/wp-content/uploads/2022/01/options_idea_hu.png)

Opciók menü - IDEA StatiCa átmenet

<!-- /wp:image -->

<!-- wp:paragraph {"editorskit":{"indent":60,"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

A Consteel és az IDEA Statica programok közötti kapcsolat létrehozására itt kell megadni az IDEA telepítési mappáját. A mappa kiválasztásához a beviteli mező végén található mappa ![](./img/wp-content-uploads-2022-01-ico_folder.png) ikonra kell kattintani.

<!-- /wp:paragraph -->

<!-- wp:spacer {"height":"1px"} -->

<!-- /wp:spacer -->

<!-- wp:heading {"level":4} -->

#### Szabványok menü

<!-- /wp:heading -->

<!-- wp:image {"align":"left","id":31200,"sizeSlug":"medium","linkDestination":"media"} -->

[![](./img/wp-content-uploads-2022-01-szabvanyok-300x199.png)](https://consteelsoftware.com/wp-content/uploads/2022/01/szabvanyok.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

A menü segítségével egyszerűen és gyorsan áttekinthetjük a program által kezelt szabványok paramétereit, illetve létrehozhatunk saját tervezési paramétereket. A használt tervezési szabvány a _**[Fájl menüben](#File-menu)**_ állítható be, a **_[Modell attribútumok](#Modell-attribútum)_** segítségével.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

A szabványfa első sora az alkalmazott tervezési szabványt mutatja, ami a modellbe kerül eltárolásra.

<!-- /wp:paragraph -->

<!-- wp:spacer {"height":"1px"} -->

<!-- /wp:spacer -->

<!-- wp:paragraph -->

Egyéni szabványbeállítás létrehozása:

<!-- /wp:paragraph -->

<!-- wp:list {"className":"is-style-arrow"} -->

- <!-- wp:list-item -->

- a létrehozás az ablak alján található **Új **gomb megnyomásával indítható el

- <!-- /wp:list-item -->

-

* <!-- wp:list-item -->

* az egyéni szabvány, egy már meglévő szabvány módosításával jön létre, ezért ki kell választani egy már meglévő szabványt

  <!-- wp:list -->

  - <!-- wp:list-item -->
  - ![](./img/wp-content-uploads-2022-01-sajat_szabvany_hu.png)
  - <!-- /wp:list-item -->

  <!-- /wp:list -->

* <!-- /wp:list-item -->

*

- <!-- wp:list-item -->

- a név mezőbe meg kell adni az új szabvány nevét, majd a zöld pipára kattintva létrejön az új szabvány

- <!-- /wp:list-item -->

-

* <!-- wp:list-item -->

* ezután az új szabvány paraméterei megadhatók

* <!-- /wp:list-item -->

<!-- /wp:list -->

<!-- wp:paragraph -->

Az egyéni szabványbeállítást a program az alábbi fájlba menti: _\\Dokumentumok\\Consteel\\UserStandard.xml_: C:\\Users\\%USERNAME%_\\Dokumentumok\\ConSteel\\ver\\UserStandard.xml_ (ahol a "ver" az aktuális Consteel verziószámát jelöli)

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Súgó menü

<!-- /wp:heading -->

<!-- wp:paragraph -->

**Consteel 17**

<!-- /wp:paragraph -->

<!-- wp:image {"id":71805,"width":"250px","height":"auto","sizeSlug":"full","linkDestination":"none"} -->

![](./img/wp-content-uploads-2024-01-1.2.-Help-menu-HU.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

A menü két kategóriára van osztva, amit a hosszanti sáv választ el, ahogy a képen látható. Az első részre vonatkozó információk megtalálhatók lent, a Consteel16-nál.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

A már létező funkciókon kívül az **Első lépések** gomb segítségével könnyen elérhető a szoftver YouTube oldala. A **Gyorsbillentyűk** lenyomásával megjelenik egy lista az összes fontos parancsról és azok megfelelő billentyűparancsairól.

<!-- /wp:paragraph -->

<!-- wp:image {"id":71815,"width":"595px","height":"auto","sizeSlug":"large","linkDestination":"none"} -->

![](./img/wp-content-uploads-2024-01-1.2.-Help-center-HU-1024x683.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

A második kategóriához a **Support kérdés beküldése** gombra kattintva lehet eljutni. Az online ablak megnyílik, és két lehetőség jelenik meg. A problémától függően a felhasználók választhatnak a Consteel támogatás vagy a Steelspace támogatás között.

<!-- /wp:paragraph -->

<!-- wp:image {"id":71785,"width":"491px","height":"auto","sizeSlug":"full","linkDestination":"none"} -->

![](./img/wp-content-uploads-2024-01-1.2.-Consteel-tamogatas-HU.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

A** Consteel támogatás** központban további lehetőségek válnak elérhetővé:

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

• **Támogatási kérés**: A legáltalánosabb lehetőség, amikor műszaki támogatásra van szükség.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

• **Engedélyezési, védelem és frissítési problémák**.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

•** Funkciókérés**: Új funkciók vagy meglévők javításának javaslatához.

<!-- /wp:paragraph -->

<!-- wp:image {"id":71825,"width":"492px","height":"auto","sizeSlug":"full","linkDestination":"none"} -->

![](./img/wp-content-uploads-2024-01-1.2.-Steelspace-tamogatas-HU.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

A **Steelspace támogatás** a következő célokra szolgál:

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

• **Kaphat segítséget** konkrét problémák esetén.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

• **Hiba bejelentés**, amikor problémák merülnek fel a Steelspace használata során.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

• **Funkciókérés**, új funkciók vagy meglévők fejlesztéséhez.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

**• Kérjen nagyobb sávszélességet.**

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

**Consteel 16**

<!-- /wp:paragraph -->

<!-- wp:image {"id":35763,"width":"540px","height":"210px","sizeSlug":"full","linkDestination":"none"} -->

![](./img/wp-content-uploads-2022-05-help_menu_hun-1.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

(15-ös verziótól érhető el) A menüt két szekcióra osztottuk, az első tartalmazza az elérhetőségeket az “[Consteel kézikönyvhöz](https://consteelsoftware.com/manual/)” és a “[Descript kézikönyvhöz](https://consteelsoftware.com/hu/manual/descript-cspi/)“, valamint az “[Oktatói anyagok](https://consteelsoftware.com/knowledgebase/?search=&filters=366,367,399,392,375,372)” almenüpont segítségével egy előszűrt tudásbázis anyagokat tartalmazó oldal érhető el. Ilyenkor nincs szükség külön bejelentkezésre a honlapunkon, mert a Consteel-t online védelemmel használó felhasználóinkat automatikusan felismeri az oldal.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

A második szekció a támogatással kapcsolatos kéréseknek lett kialakítva. **A “[Support kérdés beküldése](https://consteel.atlassian.net/servicedesk/customer/portal/1/group/1)” parancs megnyitja a támogató rendszerünk bejelentő oldalát, ahol segítséget lehet kérni a Consteel-el kapcsolatos kérdésekhez. **Ha esetleg a licenceléssel adódna gond, akkor a “[Licenceléssel kapcsolatos problémák” ](https://consteel.atlassian.net/servicedesk/customer/portal/1/group/22)parancsra kell kattintani.[ ](https://consteel.atlassian.net/servicedesk/customer/portal/1/group/22)Számunkra fontos a felhasználók véleménye, így ha valamilyen javaslat vagy kérés merülne fel, elég a “[Felhasználói kérés beküldése](https://consteel.atlassian.net/servicedesk/customer/portal/1/group/23/create/60)” parancsra kattintani és megosztani velünk az igényeket/visszajelzéseket.

<!-- /wp:paragraph -->

<!-- wp:spacer -->

<!-- /wp:spacer -->

<!-- wp:heading {"level":3} -->

### Fülek

<!-- /wp:heading -->

<!-- wp:paragraph -->

A fülek tartalmazzák a modellezés, analízis és tervezés szisztematikusan összegyűjtött funkcióit, végigvezetve a mérnököt a tervezés lépésein. Az elérhető parancsok Consteel verziónként eltérőek lehetnek. Itt mindig az aktuális legújabb verziónak megfelelően mutatjuk be a parancsokat.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

A képernyőn megjelenik az ikon neve, ha az egér mutatója az ikon fölött áll.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Geometria fül

<!-- /wp:heading -->

<!-- wp:image {"id":31238,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://www.consteelsoftware.com/wp-content/uploads/2022/01/tab_geom_hu.png)](./img/wp-content-uploads-2022-01-tab_geom_hu.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

A szerkesztéshez szükséges rajzolási, módosítási, méretezési és mérési funkciókat tartalmazza. A funkciók részletes bemutatását ld. a **_[Geometria rajzolása ](/manual/geometria-rajzolasa/)_**c. fejezetben!

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Szerkezeti elemek fül

<!-- /wp:heading -->

<!-- wp:image {"id":31217,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://www.consteelsoftware.com/wp-content/uploads/2022/01/tab_stru_hu.png)](./img/wp-content-uploads-2022-01-tab_stru_hu.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

A keresztmetszetek kiválasztásával, definiálásával, szerkezeti oszlopok, gerendák, födémek, falak, illetve a támaszok és a kapcsolatok létrehozásához szükséges funkciók találhatóak a fülön. A fenti funkciók mellett, ezen a fülön kaptak helyet további modellezési funkciók is, úgymint a diafragma és merevtest szerkesztő funkciók, keretsarok varázsló, nyírási mező, szelemensor, kivágás és borda, illetve a rúdelemeket lemezelemekké konvertáló funkció is. Az utolsó három parancs a kapcsolatok létrehozására és elhelyezésére szolgál. A funkciók részletes bemutatását ld. a **_[Szerkezet modellezése ](/manual/szerkezetmodellezes/)_**c. fejezetben!

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Terhek fül

<!-- /wp:heading -->

<!-- wp:image {"id":31252,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://www.consteelsoftware.com/wp-content/uploads/2022/01/tab_load_hu.png)](./img/wp-content-uploads-2022-01-tab_load_hu.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

Különböző teher típusok, illetve teheresetek, tehercsoportok és teherkombinációk létrehozását lehetővé tevő funkciók találhatóak a fülön. Az automatikus meteorológiai teher generálás, daru és vonatteher, és a tűzteher, illetve tűzvédelem funkciói is itt kaptak helyet. A funkciók részletes bemutatását ld. a **_[Terhek ](/manual/terhek/)_**c. fejezetben!

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Tömegek fül

<!-- /wp:heading -->

<!-- wp:image {"id":31259,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://www.consteelsoftware.com/wp-content/uploads/2022/01/tab_mass_hu.png)](./img/wp-content-uploads-2022-01-tab_mass_hu.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

Tömegesetek, tömegkombinációk létrehozását lehetővé tévő funkciók találhatóak ezen a fülön. Emellett itt kapott helyet a koncentrált tömeg elhelyezése, földrengés hatás és válaszspektrum felvétele funkció is. A funkciók részletes bemutatását ld. a **_[Tömegek ](/manual/tomegek)_**c. fejezetben!

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Végeselem fül

<!-- /wp:heading -->

<!-- wp:image {"id":31231,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://www.consteelsoftware.com/wp-content/uploads/2022/01/tab_FE_hu.png)](./img/wp-content-uploads-2022-01-tab_FE_hu.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

A végeselem generálás létrehozásához és módosításához szükséges funkciókat tartalmazza a fül, illetve az itt található modell ellenőrzés funkció segítségével kiszűrhetőek az esetleges modellezési hibák.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Analízis fül

<!-- /wp:heading -->

<!-- wp:image {"id":31224,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://www.consteelsoftware.com/wp-content/uploads/2022/01/tab_anal_hu.png)](./img/wp-content-uploads-2022-01-tab_anal_hu.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

A különböző szerkezeti analízis típusok beállítása és végrehajtása végezhető el. A számítás eredményei megtekinthetőek és feliratozhatóak számos megjelenítési mód alapján. A funkciók részletes bemutatását ld. a **_[Szerkezetek analízise ](/manual/szerkezetek-analizise/)_**c. fejezetben!

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Globális vizsgálatok fül

<!-- /wp:heading -->

<!-- wp:paragraph -->

**Consteel 17\*\*\*\***

<!-- /wp:paragraph -->

<!-- wp:image {"id":71795,"width":"416px","height":"auto","sizeSlug":"full","linkDestination":"none"} -->

![](./img/wp-content-uploads-2024-01-1.2.-Global-checks-HU.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

A Consteel 17-től kezdve a használhatósági határállapotok vizsgálata, valamint a teherbírási határállapotok vizsgálata is be van építve a Globális vizsgálatok fülbe.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Mindkét ellenőrzést külön-külön el lehet végezni, azok megfelelő nyilainak (a kék és a zöld) lenyomásával, illetve együttesen ![](./img/wp-content-uploads-2021-04-1.2.-Global-check-ikon-CS17.png) ikonra kattintva. További részletes információkért látogasson el a [**_Standard design_**](https://kesz-my.sharepoint.com/manual/standard-design/)**\_ \_**(Szabványos tervezés) fejezetbe.

<!-- /wp:paragraph -->

<!-- wp:image {"id":31245,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://www.consteelsoftware.com/wp-content/uploads/2022/01/tab_glob_hu.png)](./img/wp-content-uploads-2022-01-tab_glob_hu.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

A Globális vizsgálatok fül tartalmazza a stabilitás és keresztmetszeti vizsgálat eredményeit, öszvér oszlop ellenőrzéséből kapott eredményeket, illetve vasbeton elemek esetén végeselemes tartományokra vonatkoztatott szükséges vasmennyiség értékét. A funkciók részletes bemutatását ld. a **_[Szabványos tervezés ](/manual/szabvanyos-tervezes/)_**c. fejezetben!

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Elem vizsgálatok fül

<!-- /wp:heading -->

<!-- wp:image {"id":31266,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://www.consteelsoftware.com/wp-content/uploads/2022/01/tab_memb_check_hu.png)](./img/wp-content-uploads-2022-01-tab_memb_check_hu.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

Az elkülönített elemtervezéshez kapcsolódó (kihajlás, kifordulás és interaktív stabilitás), illetve öszvérgerenda méretezésével kapcsolatos funkciók találhatóak a fülön. A funkciók részletes bemutatását ld. a **_[Elem vizsgálatok ](/manual/szabvanyos-tervezes/acelszerkezet-tervezes/#Elem-vizsgálatok)_**c. fejezetben!

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Használhatósági vizsgálatok fül

<!-- /wp:heading -->

<!-- wp:image {"id":31273,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://www.consteelsoftware.com/wp-content/uploads/2022/01/tab_serv_hu.png)](./img/wp-content-uploads-2022-01-tab_serv_hu.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

A használhatósági határállapotok ellenőrzéséhez kapcsolódó funkciók találhatóak a fülön. A funkciók részletes bemutatását ld. a **_[Használhatósági vizsgálatok ](/manual/szabvanyos-tervezes/hasznalhatosagi-vizsgalatok/)_**c. fejezetben!

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Fóliák fül

<!-- /wp:heading -->

<!-- wp:image {"id":31288,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://www.consteelsoftware.com/wp-content/uploads/2022/01/tab_layer_hu.png)](./img/wp-content-uploads-2022-01-tab_layer_hu.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

Fóliák kezeléséhez és beállításához tartozó funkciók találhatóak a fülön. További infó a **_[Fóliák](/manual/geometria-rajzolasa/foliak/)_** c. fejezetben.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Dokumentálás fül

<!-- /wp:heading -->

<!-- wp:paragraph -->

**Consteel 17**

<!-- /wp:paragraph -->

<!-- wp:image {"id":71835,"width":"209px","height":"auto","sizeSlug":"full","linkDestination":"none"} -->

![](./img/wp-content-uploads-2024-01-1.2.-The-tabs-document-HU-CS17.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

**Consteel 16**

<!-- /wp:paragraph -->

<!-- wp:image {"id":31281,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://www.consteelsoftware.com/wp-content/uploads/2022/01/tab_dok_hu.png)](./img/wp-content-uploads-2022-01-tab_dok_hu.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

A Dokumentálás fül funkciói segítségével hozható létre a részletes statikai dokumentáció, illetve itt található a modell információ is. A használhatósági határállapotok ellenőrzéséhez kapcsolódó funkciók találhatóak a fülön. A funkciók részletes bemutatását ld. a **_[Dokumentálás ](/manual/dokumentalas/)_**c. fejezetben!

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Súgó fül

<!-- /wp:heading -->

<!-- wp:paragraph -->

**Consteel 17**

<!-- /wp:paragraph -->

<!-- wp:image {"id":71845,"width":"181px","height":"auto","sizeSlug":"full","linkDestination":"none"} -->

![](./img/wp-content-uploads-2024-01-1.2.-The-tabs-help-menu-HU.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

A kérdőjel ikonra kattintva ugyanazt a Súgó oldalt érheti el, mint amit a **[Súgó menüben](#sugo-menu)** leírva található.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

**Consteel 16**

<!-- /wp:paragraph -->

<!-- wp:image {"id":35743,"width":"281px","height":"126px","sizeSlug":"full","linkDestination":"none"} -->

![](./img/wp-content-uploads-2022-05-help_tab_hun.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

A nélkülözhetetlen támogatással kapcsolatos parancsok a “Súgó” fül alatt találhatóak, úgy mint a **“[Support kérdés beküldése](https://consteel.atlassian.net/servicedesk/customer/portal/1/group/1)”**, a “[Licenceléssel kapcsolatos problémák” ](https://consteel.atlassian.net/servicedesk/customer/portal/1/group/22)vagy a “[Felhasználói kérés beküldése](https://consteel.atlassian.net/servicedesk/customer/portal/1/group/23/create/60)”, hogy a segítségkérés még könnyebben elérhető legyen a grafikus felületről.

<!-- /wp:paragraph -->

<!-- wp:spacer -->

<!-- /wp:spacer -->

<!-- wp:heading {"level":3} -->

### Oldalsáv

<!-- /wp:heading -->

<!-- wp:paragraph -->

**Consteel 17**

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Consteel 17-től kezdve a **Mozgatás**![](./img/wp-content-uploads-2021-04-1.2-Side-bar-move-CS17.png) és **Másolás** ![](./img/wp-content-uploads-2021-04-1.2-Side-bar-copy-CS17.png)funkciók most már két különböző gombbal vannak elkülönítve.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

**Consteel 16**

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Az oldalsáv a modellezés során leggyakrabban használt funkciókat tartalmazza.

<!-- /wp:paragraph -->

<!-- wp:columns -->

<!-- wp:column {"verticalAlignment":"top","width":"10%"} -->

<!-- wp:image {"align":"right","id":7137,"width":"40px","height":"770px","sizeSlug":"full","linkDestination":"none"} -->

![](./img/wp-content-uploads-2021-04-2-2-3-side-bar.png)

<!-- /wp:image -->

<!-- /wp:column -->

<!-- wp:column {"verticalAlignment":"center"} -->

<!-- wp:paragraph -->

**Modell mentése**

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

**Visszavonás/Ismétlés**

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

**Koordináta-rendszer és a raszter háló beállítása**

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

**Modell nézetek: **Felül-, Elöl-, Oldal-, Izometrikus-, Raszterre merőleges nézet****

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

**Egyvonalas megjelenítés**

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

**Drótváz modell megjelenítés**

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

**Takart vonalas megjelenítés**

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

**Test nézet megjelenítés**

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

**Pont, és él mozgatása**

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

**Mozgatás/Másolás**

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

**Tükrözés**

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

**Forgatás**

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

**Metszősík elhelyezése (csak héjmodelleknél)**

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

**Összes objektum kijelölése**

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

**Összes kijelölés megszüntetése**

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

**Kijelölés megfordítása**

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

**Tulajdonságok szerinti kijelölés**

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

**Befoglaló nézet (Ctrl+0)**

<!-- /wp:paragraph -->

<!-- /wp:column -->

<!-- /wp:columns -->

<!-- wp:spacer -->

<!-- /wp:spacer -->

<!-- wp:heading {"level":3} -->

### Descript szerkesztő(14-es vagy korábbi verziókban 'csPI')

<!-- /wp:heading -->

<!-- wp:image {"id":27685,"height":"28px","sizeSlug":"full","linkDestination":"media"} -->

[![](https://www.consteelsoftware.com/wp-content/uploads/2021/04/2-2-4-Descript-panel-1.png)](./img/wp-content-uploads-2021-04-2-2-4-Descript-panel-1.png)

<!-- /wp:image -->

<!-- wp:paragraph {"align":"justify"} -->

A képernyő bal alsó sarkában található a **Descript **szerkesztő panelje, melyet a ![](./img/wp-content-uploads-2022-01-ico_descript_maximize.png) ikonnal nyithatunk meg. A Descript a ConSteel programozási felülete, amellyel parametrikus modellek építhetők. A Consteel szinte összes szerkezeti objektuma létrehozható, és ezen objektumok összes paramétere meghatározható/módosítható a Descript segítségével. Részletes leírását ld. a **_[Descript - a Consteel programozása](/manual/descript-cspi/)_** c. fejezetben!

<!-- /wp:paragraph -->

<!-- wp:spacer -->

<!-- /wp:spacer -->

<!-- wp:heading {"level":3} -->

### Állapotsor

<!-- /wp:heading -->

<!-- wp:image {"align":"center","id":31320,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://www.consteelsoftware.com/wp-content/uploads/2022/01/allapotsor.png)](./img/wp-content-uploads-2022-01-allapotsor.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

Az állapotsor első mezője egy állapot csík, amely az aktuális folyamatok futásának állapotát jelzi.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Az állapotsor következő 3 ikonja ( ![](./img/wp-content-uploads-2021-04-2-2-6-status-bar2.png)) a modellezés, rajzolás során megadott koordinátaértékek térbeli irányának meghatározását teszik lehetővé. A koordináta értékek manuális megadása a megfelelő billentyű megnyomásával történik (“X, Y, Z, L” billentyűk a derékszögű koordináta-rendszer és hossz megadása esetén, “a, b, L” pedig polár koordináta-rendszer esetén). A következő beállítások döntik el a megadott koordináták értelmezését:

<!-- /wp:paragraph -->

<!-- wp:paragraph {"editorskit":{"indent":40,"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

Koordináták megadása ![](./img/wp-content-uploads-2021-04-2-2-6-status-bar3.png) **globális** (GCS), vagy ![](./img/wp-content-uploads-2021-04-2-2-6-status-bar4.png) **felhasználói **(UCS) koordináta-rendszerben lehetséges, ![](./img/wp-content-uploads-2021-04-2-2-6-status-bar5.png) **abszolút **(a koordináta-rendszer origójától értelmezve), vagy ![](./img/wp-content-uploads-2021-04-2-2-6-status-bar6.png) **relatív (**az aktuális beillesztési ponttól) értelemben. ( a beillesztési pontot ![](./img/wp-content-uploads-2021-04-Insertion-point.png) sárga pötty jelöli a grafikus térben, módosítani az Insert billentyűvel lehet). Végül a harmadik ikonnal válthatunk ![](./img/wp-content-uploads-2021-04-2-2-6-status-bar7.png) **derékszögű**, vagy ![](./img/wp-content-uploads-2021-04-2-2-6-status-bar8.png) **poláris** bevitel között.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Hasonlóan a poláris bevitelhez, a derékszögű rendszerben is lehetséges egy pont meghatározása irány és távolság megadásával. Az első pont megadása után, például egy új gerenda rajzolásánál, a következő pont megadásához a kurzort a kívánt irányba mozgatva és az 'L' billentyűt lenyomva, a kurzor az "L" mezőbe ugrik, ahol manuálisan meg lehet adni a kívánt hosszt. Az ENTER lenyomására a gerenda létrejön az adott irányban és a beírt hosszal.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

A csúszka (![](./img/wp-content-uploads-2021-04-slider-v15.png)) mozgatásával az objektumok megjelenítési méretei változtathatóak. Jobb egérgombbal történő rákkattintás esetén az egyes objektum típusok külön-külön is módosíthatók. A következő ( ![](./img/wp-content-uploads-2021-04-2-2-6-status-bar10.png)) ikonok a különböző objektumok láthatóságát szabályozzák. Ezen ikonok egérrel történő megközelítése esetén megjelennek a láthatóság ki-/bekapcsolásának ikoncsoportjai.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Mindegyik csoport bal szélén található a beállítás érvényességét meghatározó ikon, mely lehet ![](./img/wp-content-uploads-2021-04-2-2-6-status-bar11.png)globális (érvényes az összes fülön), vagy ![](./img/wp-content-uploads-2021-04-2-2-6-status-bar12.png) lokális (csak az aktuális fülön érvényes). A módosítás az összes láthatósági ikoncsoportra vonatkozik. Ez a hatókör változtatás megváltoztatja a fülekre korábban alkalmazott globális és a fülre alkalmazott lokális beállításokat is.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

**Objektumok méretezése\*\*\*\***

<!-- /wp:paragraph -->

<!-- wp:image {"id":71765,"width":"136px","height":"auto","sizeSlug":"full","linkDestination":"none"} -->

![](./img/wp-content-uploads-2024-01-1.2-Sizing-of-objects-HU-CS17.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

A csúszkára jobb kattintással megnyílik az objektum méretezési ablak. Ebben az ablakban az egyes modellobjektumok méretét lehet módosítani.

<!-- /wp:paragraph -->

<!-- wp:image {"id":71755,"width":"284px","height":"auto","sizeSlug":"full","linkDestination":"none"} -->

![](./img/wp-content-uploads-2024-01-1.2-Object-dimensions-HU-CS17.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

Az ablakot a **Nézet** menüből is megnyithatja. További információkért látogasson el a **Nézet **menübe.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Grafikus szimbólumok láthatósága ![](./img/wp-content-uploads-2022-01-ico_visibility_graph.png)

<!-- /wp:heading -->

<!-- wp:image {"id":27717,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://www.consteelsoftware.com/wp-content/uploads/2021/04/popup_visi_symb.png)](./img/wp-content-uploads-2021-04-popup_visi_symb.png)

<!-- /wp:image -->

<!-- wp:list {"className":"is-style-none"} -->

- <!-- wp:list-item -->
- ![](./img/wp-content-uploads-2022-01-visi_graph_lines.png) Vonalak láthatósága. A Geometria fül vonal, kör és körív funkcióival rajzolt elemeket érinti.
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- ![](./img/wp-content-uploads-2022-01-visi_graph_memb.png) Szerkezeti elemek láthatósága. A Szerkezeti elemek fül oszlop vagy gerenda szerkesztés funkciójával létrehozott elemekre vonatkozik. Kikapcsolt állapotban a szerkezeti elemek középvonalai láthatók maradnak, ha a vonalak (![](./img/wp-content-uploads-2022-01-visi_graph_lines.png)) láthatósága be van kacsolva
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- ![](./img/wp-content-uploads-2022-01-visi_graph_hinge.png) Csuklók láthatósága (vég folytonosság)
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- ![](./img/wp-content-uploads-2022-01-visi_graph_2D.png) Síkidomok láthatósága. Kikapcsolt állapotban a síkidomok határoló vonalai láthatók maradnak, ha a vonalak (![](./img/wp-content-uploads-2022-01-visi_graph_lines.png)) láthatósága be van kapcsolva
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- ![](./img/wp-content-uploads-2022-01-visi_graph_plate.png) A 3D felületi elemek (lemez és fal) láthatósága. Kikapcsolt állapotban a 3D felület határoló vonalai és síkidom komponense láthatóak maradnak, ha a vonalak (![](./img/wp-content-uploads-2022-01-visi_graph_lines.png)) és síkidomok (![](./img/wp-content-uploads-2022-01-visi_graph_2D.png)) láthatósága be van kapcsolva
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- ![](./img/wp-content-uploads-2022-01-visi_graph_supp.png) Támaszok láthatósága
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- ![](./img/wp-content-uploads-2022-01-visi_graph_link.png) Kapcsolati elemek láthatósága  
  ![](./img/wp-content-uploads-2022-01-visi_graph_smartlink.png) Okos kapcsolati elem láthatósága  
  ![](./img/wp-content-uploads-2022-01-visi_graph_joint.png) Elhelyezett csomópontok szimbólumának láthatósága
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- ![](./img/wp-content-uploads-2022-01-visi_graph_curv.png) Elhelyezett kezdeti görbeség szimbólumának láthatósága
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- ![](./img/wp-content-uploads-2022-01-visi_graph_shear.png) Nyírási mező szimbólumának láthatósága
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- ![](./img/wp-content-uploads-2022-01-visi_graph_frame.png) Keretsarok szimbólumának láthatósága
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- ![](./img/wp-content-uploads-2022-01-visi_graph_load.png) Terhek láthatósága (pont, vonal és felületi teher)
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- ![](./img/wp-content-uploads-2022-01-visi_graph_LTS.png) Teherátadó felület láthatósága. Kikapcsolt állapotban a síkidomok határoló vonalai láthatók maradnak, ha a vonalak (![](./img/wp-content-uploads-2022-01-visi_graph_lines.png)) láthatósága be van kacsolva
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- ![](./img/wp-content-uploads-2022-01-visi_graph_distr_load.png) Szétosztott felületi teher megjelenítése
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- ![](./img/wp-content-uploads-2022-01-visi_graph_mass.png) Tömegek megjelenítése
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- ![](./img/wp-content-uploads-2022-01-visi_graph_constr.png) Kényszerek láthatósága
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- ![](./img/wp-content-uploads-2022-01-visi_graph_rigid.png) Merev testek láthatósága  
  ![](./img/wp-content-uploads-2022-01-visi_graph_diaph.png) Diafragmák láthatósága  
  ![](./img/wp-content-uploads-2022-01-visi_graph_purl.png) Szelemensorok láthatósága
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- ![](./img/wp-content-uploads-2022-01-visi_graph_rib.png) Merevítők láthatósága
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- ![](./img/wp-content-uploads-2022-01-visi_graph_cut.png) Gerinckivágások láthatósága
- <!-- /wp:list-item -->

<!-- /wp:list -->

<!-- wp:heading {"level":4} -->

#### Lokális koordináta-rendszerek láthatósága (LCS) ![](./img/wp-content-uploads-2022-01-ico_visibility_coord.png)

<!-- /wp:heading -->

<!-- wp:image {"id":27723,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://www.consteelsoftware.com/wp-content/uploads/2021/04/popup_visi_LCS.png)](./img/wp-content-uploads-2021-04-popup_visi_LCS.png)

<!-- /wp:image -->

<!-- wp:list {"className":"is-style-none"} -->

- <!-- wp:list-item -->
- ![](./img/wp-content-uploads-2022-01-visi_coord_rast.png) Raszter láthatósága
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- ![](./img/wp-content-uploads-2022-01-visi_coord_grid.png) Modell raszter láthatósága
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- ![](./img/wp-content-uploads-2022-01-visi_coord_memb.png) A szerkezeti elemek lokális koordináta-rendszerének láthatósága (gerenda, oszlop)
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- ![](./img/wp-content-uploads-2022-01-visi_coord_plate.png) 3D felületi elemek lokális koordináta-rendszerének láthatósága (lemez, fal)
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- ![](./img/wp-content-uploads-2022-01-visi_coord_supp.png) Támaszok lokális koordináta-rendszerének láthatósága
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- ![](./img/wp-content-uploads-2022-01-visi_coord_link.png) Kapcsolati elemek lokális koordináta-rendszerének láthatósága
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- ![](./img/wp-content-uploads-2022-01-visi_coord_smartlink.png) Okos kapcsolati elem lokális koordináta-rendszerének láthatósága
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- ![](./img/wp-content-uploads-2022-01-visi_coord_LTS.png) Teher átadó felületek lokális koordináta-rendszerének láthatósága
- <!-- /wp:list-item -->

<!-- /wp:list -->

<!-- wp:quote {"editorskit":{"indent":20,"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

> <!-- wp:paragraph -->
>
> **Megjegyzés:**
>
> <!-- /wp:paragraph -->
>
> <!-- wp:paragraph -->
>
> **Ha egy objektumok láthatóságát kikapcsoljuk, akkor az objektum lokális koordináta-rendszerének láthatósága is megszűnik!**
>
> <!-- /wp:paragraph -->

<!-- /wp:quote -->

<!-- wp:heading {"level":4} -->

#### Azonosítók láthatósága ![](./img/wp-content-uploads-2022-01-ico_visibility_names.png)

<!-- /wp:heading -->

<!-- wp:image {"id":27730,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://www.consteelsoftware.com/wp-content/uploads/2021/04/popup_visi_names.png)](./img/wp-content-uploads-2021-04-popup_visi_names.png)

<!-- /wp:image -->

<!-- wp:list {"className":"is-style-none"} -->

- <!-- wp:list-item -->
- ![](./img/wp-content-uploads-2022-01-visi_names_point.png) Végeselem pontok sorszámainak láthatósága. (Csak a **Végeselem **és az **Analízis **fülön látható!)
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- ![](./img/wp-content-uploads-2022-01-visi_coord_memb.png) Rúdelemek neveinek láthatósága
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- ![](./img/wp-content-uploads-2022-01-visi_coord_plate.png) 3D felületelemek neveinek láthatósága (lemez, fal)
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- ![](./img/wp-content-uploads-2022-01-visi_coord_supp.png) Támaszok neveinek láthatósága
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- ![](./img/wp-content-uploads-2022-01-visi_graph_hinge.png) Csuklók (vég folytonosság) neveinek láthatósága
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- ![](./img/wp-content-uploads-2022-01-visi_coord_link.png) Kapcsolati elemek neveinek láthatósága
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- ![](./img/wp-content-uploads-2022-01-visi_coord_smartlink.png) Okos kapcsolati elem neveinek láthatósága
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- ![](./img/wp-content-uploads-2022-01-visi_graph_joint.png) Elhelyezett csomópontok neveinek láthatósága
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- ![](./img/wp-content-uploads-2022-01-visi_coord_LTS.png) Teherátadó felületek neveinek láthatósága
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- ![](./img/wp-content-uploads-2022-01-visi_graph_shear.png) Nyírási mező azonosítójának láthatósága
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- ![](./img/wp-content-uploads-2022-01-visi_names_reinf.png) Vasalási objektum azonosítójának láthatósága
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- ![](./img/wp-content-uploads-2022-01-visi_graph_constr.png) Kényszerek neveinek láthatósága
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- ![](./img/wp-content-uploads-2022-01-visi_graph_rigid.png) Merev testek neveinek láthatósága
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- ![](./img/wp-content-uploads-2022-01-visi_graph_diaph.png) Diafragmák neveinek láthatósága
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- ![](./img/wp-content-uploads-2022-01-visi_graph_purl.png) Szelemensorok neveinek láthatósága
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- ![](./img/wp-content-uploads-2022-01-visi_graph_rib.png) Merevítők neveinek láthatósága
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- ![](./img/wp-content-uploads-2022-01-visi_graph_cut.png) Gerinckivágások neveinek láthatósága
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- ![](./img/wp-content-uploads-2022-01-visi_coord_grid.png) Modell raszter neveinek láthatósága
- <!-- /wp:list-item -->

<!-- /wp:list -->

<!-- wp:quote {"editorskit":{"indent":20,"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

> <!-- wp:paragraph -->
>
> **Megjegyzés:**
>
> <!-- /wp:paragraph -->
>
> <!-- wp:paragraph -->
>
> **Ha egy objektumok láthatóságát kikapcsoljuk, akkor az objektum nevének láthatósága is megszűnik!**
>
> <!-- /wp:paragraph -->

<!-- /wp:quote -->

<!-- wp:heading {"level":4} -->

#### Feliratok láthatósága ![](./img/wp-content-uploads-2022-01-ico_visibility_numbs.png)

<!-- /wp:heading -->

<!-- wp:image {"id":31626,"width":"150px","height":"152px","sizeSlug":"full","linkDestination":"media"} -->

[![](https://www.consteelsoftware.com/wp-content/uploads/2022/01/visibility_numbs_2.png)](./img/wp-content-uploads-2022-01-visibility_numbs_2.png)

<!-- /wp:image -->

<!-- wp:list {"className":"is-style-none"} -->

- <!-- wp:list-item -->
- ![](./img/wp-content-uploads-2022-01-visi_names_mat.png) Anyagminőségek láthatósága
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- ![](./img/wp-content-uploads-2022-01-visi_names_prof.png) Szelvénynevek láthatósága
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- ![](./img/wp-content-uploads-2022-01-visi_names_thick.png) Lemezvastagságok láthatósága (mm)
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- ![](./img/wp-content-uploads-2022-01-visi_graph_load.png) Teherintenzitás láthatósága
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- ![](./img/wp-content-uploads-2022-01-visi_graph_mass.png) Tömegek feliratának megjelenítése
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- ![](./img/wp-content-uploads-2022-01-visi_graph_curv.png) Kezdeti görbeség láthatósága
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- ![](./img/wp-content-uploads-2022-01-visi_graph_frame.png) Keretsarok feliratának láthatósága
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- ![](./img/wp-content-uploads-2022-01-visi_names_units.png) Mértékegységek láthatósága
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- ![](./img/wp-content-uploads-2022-01-ico_visibility_coord.png) Lokális koordináta-rendszerek tengelyneveinek láthatósága
- <!-- /wp:list-item -->

<!-- /wp:list -->

<!-- wp:heading {"level":4} -->

#### Objektumok színének meghatározása

<!-- /wp:heading -->

<!-- wp:image {"id":11108,"sizeSlug":"large","linkDestination":"media"} -->

[![](https://www.consteelsoftware.com/wp-content/uploads/2021/04/obj_color_set_v15.png)](./img/wp-content-uploads-2021-04-obj_color_set_v15.png)

<!-- /wp:image -->

<!-- wp:list {"className":"is-style-none"} -->

- <!-- wp:list-item -->
- ![](./img/wp-content-uploads-2022-01-visi_color_def.png) Szerkezeti elemek színezése az alapértelmezett módon (layer vagy anyag színek)
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- ![](./img/wp-content-uploads-2022-01-visi_color_prof.png) Szerkezeti elemek színezése szelvény színek alapján (további infót ld. a _**[Szelvénykezelő](/manual/szerkezetmodellezes/szelvenykezelo/)**_ c. fejezetben!)
- <!-- /wp:list-item -->

<!-- /wp:list -->

<!-- wp:heading {"level":4} -->

#### Fogópont beállítások

<!-- /wp:heading -->

<!-- wp:image {"id":31647,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://www.consteelsoftware.com/wp-content/uploads/2022/01/visibility_snaps.png)](./img/wp-content-uploads-2022-01-visibility_snaps.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

A **Fogópont beállítások** ikoncsoport funkciói számos beállítási lehetőséget kínálnak a hatékony modellezés elősegítéséhez:

<!-- /wp:paragraph -->

<!-- wp:list {"className":"is-style-none"} -->

- <!-- wp:list-item -->

- ![](./img/wp-content-uploads-2022-01-visi_snap_end.png) Végponti fogópontok (vonalak, ívek, szerkezeti elemek)

- <!-- /wp:list-item -->

-

* <!-- wp:list-item -->

* ![](./img/wp-content-uploads-2022-01-visi_snap_sect.png) Felosztási funkció Be / Ki

  <!-- wp:list -->

  - <!-- wp:list-item -->

  - **Be**

    <!-- wp:list -->

    - <!-- wp:list-item -->

    - Bekapcsolt állapotban megjelenik a felosztási mező az állapotsoron. Osztópontok megadása háromféle képen történhet. A felhasználó a mező előtt látható ikonra kattintással választhat ezek közül:

      <!-- wp:list -->

      - <!-- wp:list-item -->
      - ![](./img/wp-content-uploads-2021-04-2-2-6-divide-percentage.png) a megadott százalékos érték alapján kerülnek elhelyezésre az osztópontok a szerkezeti elemek hossza mentén. A távolságokat a kurzorral megközelített végponttól jelöli ki a program. Általában maradéktávolság adódik.
      - <!-- /wp:list-item -->
      -
      - <!-- wp:list-item -->
      - ![](./img/wp-content-uploads-2021-04-2-2-6-divide-distance.png) távolság érték adható meg. A kurzorral megközelített végponttól kerülnek felmérésre a fogópontok. Általában maradéktávolság adódik.
      - <!-- /wp:list-item -->
      -
      - <!-- wp:list-item -->
      - ![](./img/wp-content-uploads-2021-04-2-2-6-divide-number.png) a felosztás darabszáma adható meg. Ez esetben nincs maradék távolság.
      - <!-- /wp:list-item -->

      <!-- /wp:list -->

    - <!-- /wp:list-item -->

    <!-- /wp:list -->

  - <!-- /wp:list-item -->

  -

  * <!-- wp:list-item -->

  * **Ki**: A mező eltűnik az állapotsorból

  * <!-- /wp:list-item -->

  <!-- /wp:list -->

* <!-- /wp:list-item -->

*

- <!-- wp:list-item -->

- ![](./img/wp-content-uploads-2022-01-visi_snap_inters.png) Grafikai vagy szerkezeti elemek metszéspontjai. Vonalak, körök, ívek, szerkezeti elemek (gerendák, oszlopok)

- <!-- /wp:list-item -->

-

* <!-- wp:list-item -->

* ![](./img/wp-content-uploads-2022-01-visi_snap_paral.png) Egyenes objektummal párhuzamos fogópontok megjelenítése (csak kisebb modellek esetén javasoljuk a bekapcsolását)

* <!-- /wp:list-item -->

*

- <!-- wp:list-item -->

- ![](./img/wp-content-uploads-2022-01-visi_snap_line.png) A kurzorhoz legközelebbi elemhez tartozó fogópont megjelenítése

- <!-- /wp:list-item -->

-

* <!-- wp:list-item -->

* ![](./img/wp-content-uploads-2022-01-visi_snap_length.png) Egyenes elem meghosszabbítása adott távolsággal. A rendszer mutatja az aktuális pont távolságát (mm). A meghosszabbítás értékének lépéseit az állapotsor utolsó mezőjében lehet megadni (mm)

* <!-- /wp:list-item -->

*

- <!-- wp:list-item -->

- ![](./img/wp-content-uploads-2022-01-visi_snap_point.png) Szerkezeti pontok

- <!-- /wp:list-item -->

-

* <!-- wp:list-item -->

* ![](./img/wp-content-uploads-2022-01-visi_snap_rast.png) Raszterháló pontjai

* <!-- /wp:list-item -->

*

- <!-- wp:list-item -->

- ![](./img/wp-content-uploads-2022-01-visi_snap_tang.png) Ív/kör érintő pontjainak meghatározása adott pontból

- <!-- /wp:list-item -->

-

* <!-- wp:list-item -->

* ![](./img/wp-content-uploads-2022-01-visi_snap_perp.png) Egy pontból egy egyenesre, ívre, körre merőleges pont kijelölése

* <!-- /wp:list-item -->

*

- <!-- wp:list-item -->

- ![](./img/wp-content-uploads-2022-01-visi_snap_circ.png) Ív/kör középpontjának kijelölése

- <!-- /wp:list-item -->

<!-- /wp:list -->

<!-- wp:paragraph -->

Egyenes elemek középpontjának megfogása a felosztás ![](./img/wp-content-uploads-2022-01-visi_snap_sect.png) funkció megfelelő beállításával érhető el. Ld. fentebb

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Meghosszabbítás lépésköze

<!-- /wp:heading -->

<!-- wp:paragraph -->

Az állapotsor utolsó mezője a meghosszabbítás lépésköze. A mezőben megadott szám, a meghosszabbítás lépésközét adja meg mm-ben, amennyiben a meghosszabbítás ![](./img/wp-content-uploads-2022-01-visi_snap_length.png) funkció aktív.

<!-- /wp:paragraph -->

<!-- wp:image {"align":"center","id":7330,"width":"274px","height":"246px","sizeSlug":"full","linkDestination":"media"} -->

[![](https://www.consteelsoftware.com/wp-content/uploads/2021/04/2-2-6-lengthen.png)](./img/wp-content-uploads-2021-04-2-2-6-lengthen.png)

<!-- /wp:image -->

<!-- wp:spacer -->

<!-- /wp:spacer -->

<!-- wp:heading {"level":3} -->

### Objektumfa, Objektum tulajdonságok és Diagnosztika ablakok

<!-- /wp:heading -->

<!-- wp:paragraph -->

Ezek az ablakok a ****[Nézet ](#View-menu)****menüben kapcsolhatók ki/be. A program indításánál alapértelmezetten a Diagnosztika ablaka kikapcsolt állapotban, a másik kettő bekapcsolt állapotban van, és a képernyő jobb szélén jelennek meg. Az ablakok a címsoron történő Fogd-és-vidd művelettel (drag&drop) áthelyezhetők, és a képernyő bármely széléhez dokkolhatók.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

**Consteel 17**

<!-- /wp:paragraph -->

<!-- wp:image {"id":71895,"width":"228px","height":"auto","sizeSlug":"full","linkDestination":"none"} -->

![](./img/wp-content-uploads-2024-01-HU-1.2.7.-CS17-View-panel.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

**Részletmodellek fül**

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

A Modellrészek ablak alapértelmezett pozíciója a jobb felső sarokban található. Két részre oszlik: **Egyedi részletek** és **Auto részletek**.

<!-- /wp:paragraph -->

<!-- wp:image {"id":71945,"width":"232px","height":"auto","sizeSlug":"full","linkDestination":"none"} -->

![](./img/wp-content-uploads-2024-01-HU-1.2.7.-CS17-Model-Portions.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

Részletes leírásért lásd a **Modellnézeteket** és a **Részletek kezelőjét**!

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

**Objektum tulajdonságok**

<!-- /wp:paragraph -->

<!-- wp:image {"id":71915,"width":"250px","height":"auto","sizeSlug":"full","linkDestination":"none"} -->

![](./img/wp-content-uploads-2024-01-HU-1.2.7.-CS17-View-panel-Object-properties.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

Az **Objektum tulajdonságok** fülön (alapértelmezetten az ablak jobb alsó részén) az elemek kezdeti és végpontjai azonosíthatók; ezeket sárgával és magentával jelzik.

<!-- /wp:paragraph -->

<!-- wp:image {"id":71905,"width":"227px","height":"auto","sizeSlug":"full","linkDestination":"none"} -->

![](./img/wp-content-uploads-2024-01-HU-1.2.7.-CS17-View-panel-Object-properties-start-and-end-point.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

A színes pont méretének növeléséhez menjen a **nézet** panelre, **objektumok méreteire**, és módosítsa azt a **lokálrendszerből**, ahogy azt a lenti képen láthatja:

<!-- /wp:paragraph -->

<!-- wp:image {"id":71925,"width":"354px","height":"auto","sizeSlug":"full","linkDestination":"none"} -->

![](./img/wp-content-uploads-2024-01-HU-1.2.7.-CS17-View-panel-size-strat-and-end-point.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

**Modell tartalma** fül (Ctrl+Q)

<!-- /wp:paragraph -->

<!-- wp:image {"id":71935,"width":"224px","height":"auto","sizeSlug":"full","linkDestination":"none"} -->

![](./img/wp-content-uploads-2024-01-HU-1.2.7.-CS17-Model-Content.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

A **Modell tartalma** fül tartalmazza az összes előre meghatározott alap objektumtípust, amelyekkel szerkezeti modellt lehet építeni. További részletekért lásd a **Kiválasztás** fejezetet és a Consteel 16-ot.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

**Consteel 16**

<!-- /wp:paragraph -->

<!-- wp:image {"align":"center","id":31073,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://www.consteelsoftware.com/wp-content/uploads/2022/01/menu_nezet_hu.png)](./img/wp-content-uploads-2022-01-menu_nezet_hu.png)

<!-- /wp:image -->

<!-- wp:heading {"level":4} -->

#### Objektumfa ablak

<!-- /wp:heading -->

<!-- wp:paragraph -->

Az alapértelmezett helye a képernyő jobb felső sarka. Két fül található az Objektumfa ablakon:

<!-- /wp:paragraph -->

<!-- wp:paragraph {"editorskit":{"indent":60,"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

**Modell tartalma **fül

<!-- /wp:paragraph -->

<!-- wp:image {"align":"center","id":31740,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://www.consteelsoftware.com/wp-content/uploads/2022/01/objektumfa_modell-tartalma.png)](./img/wp-content-uploads-2022-01-objektumfa_modell-tartalma.png)

<!-- /wp:image -->

<!-- wp:paragraph {"editorskit":{"indent":60,"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

A modellfa alapesetben is tartalmazza azokat az objektum csoportokat, amelyek szükségesek egy szerkezet felépítéséhez.

<!-- /wp:paragraph -->

<!-- wp:paragraph {"editorskit":{"indent":60,"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

Modellezés során minden új objektum (anyagminőségek, szelvények, terhek, támaszok stb.) bekerül a modellfa megfelelő csoportjaiba. Objektumok a fastruktúrában is kijelölhetőek. A kiválasztott elemek a modelltérben is kijelöltek lesznek. Többszörös kijelölés is lehetséges a szokásos módon a CTRL vagy a SHFT billentyűk használatával.

<!-- /wp:paragraph -->

<!-- wp:paragraph {"editorskit":{"indent":60,"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

**Részlet kezelő **fül

<!-- /wp:paragraph -->

<!-- wp:image {"align":"center","id":31747,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://www.consteelsoftware.com/wp-content/uploads/2022/01/objektumfa_reszletek.png)](./img/wp-content-uploads-2022-01-objektumfa_reszletek.png)

<!-- /wp:image -->

<!-- wp:paragraph {"editorskit":{"indent":60,"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

Részlet kezelő használatának leírását ld. a [**Részlet kezelő**](/manual/modell-nezet/reszlet-kezelo/) c. fejezetben!

<!-- /wp:paragraph -->

<!-- wp:spacer -->

<!-- /wp:spacer -->

<!-- wp:heading {"level":4} -->

#### Diagnosztika ablak

<!-- /wp:heading -->

<!-- wp:paragraph -->

**Consteel 17**

<!-- /wp:paragraph -->

<!-- wp:image {"id":71745,"width":"255px","height":"auto","sizeSlug":"full","linkDestination":"none"} -->

![](./img/wp-content-uploads-2024-01-1.2.-Diagnostics-Window-HU-CS17.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

A Consteel 17-től kezdve a már meglévő hibaüzenetek mellett megjelenik egy narancssárga színű hibaüzenet is.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Ez a hiba akkor jelentkezik, amikor az automatikus terheléselosztás ki van kapcsolva és a modellben olyan változás történik, amely indokolja a terhek újraosztását a helyes eredmény eléréséhez. A terheléseket a modell új állapotához való frissítéshez jelölje be a négyzetet, vagy kattintson a diagnosztika üzenet alatt megjelenő **Frissítés** gombra.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

További információkért kérjük, látogasson el az** Opciók**>**[Terheszétosztás](#teherszetosztas) **menüpontba.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

**Consteel 16**

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Geometriai vagy modellezési hibák (egy vagy több elem átfedése, hiányzó támasz stb…) észlelése esetén a Diagnosztika ablak automatikusan megjelenik, kijelezve a problémás elemeket.

<!-- /wp:paragraph -->

<!-- wp:image {"align":"center","id":31754,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://www.consteelsoftware.com/wp-content/uploads/2022/01/diag_ablak.png)](./img/wp-content-uploads-2022-01-diag_ablak.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

A Diagnosztika ablakban a hiba üzenetek piros színnel, a figyelmeztetések pedig sárga színnel kerülnek megjelenítésre.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

A Diagnosztika ablakban kiválasztott objektum a _**Kijelöl **\_gomb megnyomásával a modelltérben is kijelölésre kerül. A **Shift **vagy **Ctrl **billentyűk egyidejű lenyomásával a többszörös kijelölés is lehetséges. Egy probléma címsorára kattintva az összes hozzá tartozó objektum kijelölésre kerül. A kiválasztott objektum/ok a _**Töröl **\_gomb, vagy a **Delete **billentyű segítségével kitörölhető(ek).

<!-- /wp:paragraph -->

<!-- wp:spacer -->

<!-- /wp:spacer -->

<!-- wp:heading {"level":4} -->

#### Objektum tulajdonságok ablak

<!-- /wp:heading -->

<!-- wp:paragraph -->

Az ablak alapértelmezett helye a jobb alsó sarok. Minden kiválasztott objektum (és alobjektum) összes tulajdonsága megjelenik az **Objektum tulajdonságok** ablakban (#1). Az egyes paraméterek megtekinthetők, illetve a legtöbb paraméter módosítható is. Ha több azonos csoportba tartozó objektumot választunk ki, akkor a kiválasztott objektumok azonos paraméterei olvashatóak, az eltérőek helyén az „eltérő” szöveg kerül kijelzésre. Az eltérő értékek is átírhatók, és így az összes kijelölt objektumra megadható egy egységes, új érték.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Különböző típusú objektumok kiválasztása esetén, azok objektum típusonként csoportosítva jelennek meg. Az egyes csoportok az előttük található kis "+" ikonnal nyithatók ki, "-" ikonnal zárhatók be.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

A kijelölés megszüntetése (![](./img/wp-content-uploads-2021-04-2-2-7-unselect.png)) gombbal, az előzőleg kiválasztott objektum típusok kivonhatóak a kiválasztásból.

<!-- /wp:paragraph -->

<!-- wp:image {"align":"center","id":31762,"sizeSlug":"large","linkDestination":"media"} -->

[![](./img/wp-content-uploads-2022-01-objekt_tulajd_nezet-1024x515.png)](https://consteelsoftware.com/wp-content/uploads/2022/01/objekt_tulajd_nezet.png)

<!-- /wp:image -->
