---
sidebar_position: 3
---
# Részlet kezelő

<!-- wp:paragraph -->

A _**Részlet kezelő**_ egy igen hasznos eszköz, a modell különböző részleteinek (mint például szintek, oszlopok, merevítés, gerendák stb.) csoportosítására és kezelésére. A funkció a _**Részlet kezelő**_ fülön található, ami alapértelmezésben a képernyő jobb oldalán jelenik meg.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

**Consteel 17**

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

AZ **Egyedi részletek** fül arra szolgál, hogy manuálisan definiáljunk Részleteket és Szinteket a meglévő modellből. (további információ a **Consteel 16-** nál található) Analízis csak az egyedi részleteken végezhető.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Az **Auto részletek** automatikusan generálódnak, amikor a szerkezeteket modellezzük. Ezek mindig frissülnek a modell aktuális állapotára. Ez a fül a modellt részekre osztja azok tulajdonságai szerint.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

• **Rúd elemek** esetében az automatikus szétválasztás a **Szelvény**, **Anyag**, **Elhelyezkedés** és **Mértékadó kihasználtság** szerint történhet.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

• A **lemez elemek** esetében az Automatikus részeket a **Vastagság**, **Anyag** és **Elhelyezkedés** alapján hozzák létre.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Ezek a funkciók az **Egyedi részletek** és **Auto részletek** füleken találhatók (alapértelmezés szerint a jobb oldali panelen).

<!-- /wp:paragraph -->

<!-- wp:image {"id":71955,"width":"246px","height":"auto","sizeSlug":"full","linkDestination":"none"} -->

![](./img/wp-content-uploads-2024-01-HU-Custom-portions-and-Auto-Portions.png)

<!-- /wp:image -->

<!-- wp:image {"id":72005,"width":"257px","height":"auto","sizeSlug":"full","linkDestination":"none"} -->

![](./img/wp-content-uploads-2024-01-HU-Auto-Portions-and-Custom-portions.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

Az **Auto részletek** kategóriában minden egyes alkategória előtt lévő + ikonra kattintva megjelennek az automatikusan generált modellrészletek. Ezek csak a rudakat tartalmazzák a vonalaikkal vagy a poligonjukkal. _Nem tartalmazhatnak_ támaszt, terhelést, kapcsoló elemet stb.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Az elemek **Elhelyezkedése** azt mutatja, hogy az elemek melyik orientációban és síkban vannak elhelyezve.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

A **Mértékadó kihasználtság** kategória csak a _globális vizsgálatok_ elvégzését követően használható. Az elemek az **Auto részletbe** a mértékadó kihasználtságuk alapján kerülnek be, függetlenül attól, hogy melyik eredmény van megjelenítve rajtuk.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Egy **részlet** bekapcsolásához jelölje be a név előtti jelölőnégyzetet. Több **Auto részlet** is bekapcsolható egyszerre, több jelölőnégyzet bejelölésével.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Az Egyéni részek és az **Auto részletek** egyidejűleg használhatók. Ebben az esetben csak azok a elemek jelennek meg, amelyek mindkét kritériumnak megfelelnek _egyszerre._

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Például, ha az **Egyedi részletben** bekapcsoljuk a ,,Fő szerkezetet”, akkor azon részhez tartozó összes elem látható lesz.

<!-- /wp:paragraph -->

<!-- wp:image {"id":71965,"width":"404px","height":"auto","sizeSlug":"full","linkDestination":"none"} -->

![](./img/wp-content-uploads-2024-01-HU-Custom-portions-example.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

Az **Egyedi részletek** kritériumainak megtartásával, egyszerre engedélyezzük a ,,HEA160 szelvény” **Auto részletet**, csak azok az elemek jelennek meg, amelyek mind a ,,Fő szerkezethez” tartoznak, mind pedig kielégítik a ,,HEA160 Szelvény” kritériumait. (lásd a lenti képet)

<!-- /wp:paragraph -->

<!-- wp:image {"id":71985,"width":"407px","height":"auto","sizeSlug":"full","linkDestination":"none"} -->

![](./img/wp-content-uploads-2024-01-HU-Auto-portions-example.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

A Részlet ablak alsó részén ,,**Az elrejtett részek megjelentése áttetszően**" jelölőnégyzetet bejelöljük, akkor a modell rejtett részei is láthatóvá válnak halvány szürke vonalakkal.

<!-- /wp:paragraph -->

<!-- wp:image {"id":71975,"width":"412px","height":"auto","sizeSlug":"full","linkDestination":"none"} -->

![](./img/wp-content-uploads-2024-01-HU-hidden-lines-example.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

Az összes részlet kikapcsolásához kattintson a **Teljes modell nézet** (Alt+W) ikonra. ( ![](./img/wp-content-uploads-2024-01-Auto-Portions-Full-view-tab.png) ) (Ez a **Részletmodellek** fül bal felső részén található.)

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Ezenkívül a **lemez elemeket** a lemez vastagsága alapján is lehet csoportosítani, ahogy az a lenti ábrán látható:

<!-- /wp:paragraph -->

<!-- wp:image {"id":71995,"width":"409px","height":"auto","sizeSlug":"full","linkDestination":"none"} -->

![](./img/wp-content-uploads-2024-01-HU-Auto-Portions-Plate-element.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

Ha módosításokra van szükség az elemeken a kiválasztott **részletekben**, vegye figyelembe, hogy a részlet megjelenítése nem azonos az objektum kiválasztásával. Ezt az eszközt csak _vizuális célokra_ és az elemek kiválasztásának megkönnyítésére lehet használni.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

**Consteel 16**

<!-- /wp:paragraph -->

<!-- wp:columns -->

<!-- wp:column {"width":"50%"} -->

<!-- wp:image {"align":"center","id":32609,"width":336,"height":341,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://www.consteelsoftware.com/wp-content/uploads/2022/02/reszlet_kezelo_parancsok.png)](./img/wp-content-uploads-2022-02-reszlet_kezelo_parancsok.png)

<!-- /wp:image -->

<!-- /wp:column -->

<!-- wp:column {"width":"50%"} -->

<!-- wp:image {"align":"center","id":7811,"width":436,"height":341,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://www.consteelsoftware.com/wp-content/uploads/2021/04/4-4-portions-1.png)](./img/wp-content-uploads-2021-04-4-4-portions-1.png)

<!-- /wp:image -->

<!-- /wp:column -->

<!-- /wp:columns -->

<!-- wp:image {"align":"right","id":18012,"width":298,"height":239,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://www.consteelsoftware.com/wp-content/uploads/2021/04/4-2-model-view-submodel-1.png)](./img/wp-content-uploads-2021-04-4-2-model-view-submodel-1.png)

<!-- /wp:image -->

<!-- wp:image {"align":"right","id":18024,"width":398,"height":280,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://www.consteelsoftware.com/wp-content/uploads/2021/04/4-2-model-view-submodel-select.jpg)](./img/wp-content-uploads-2021-04-4-2-model-view-submodel-select.jpg)

<!-- /wp:image -->

<!-- wp:paragraph -->

\#1 ![](./img/wp-content-uploads-2022-02-reszlet_kezelo_reszet_modell_nezet.png) Nagy modelleknél gyakran van szükség arra, hogy a modellnek csak egy része kerüljön megjelenítésre. Ilyenkor használható a _**Részlet modell nézet**_ funkció. A funkció hatására az összes fülön csak a kiválasztott elemek maradnak láthatók.

<!-- /wp:paragraph -->

<!-- wp:spacer {"height":"1px"} -->

<!-- /wp:spacer -->

<!-- wp:paragraph -->

\#2 ![](./img/wp-content-uploads-2022-02-reszlet_kezelo_teljes_modell_nezet.png) A _**Teljes modell nézet**_ ikonra kattintva a teljes modell újra láthatóvá válik.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

\#3 ![](./img/wp-content-uploads-2022-02-reszlet_kezelo_uj_mappa.png) A létrehozott részletek (ld. később) mappákba is rendezhetők. Az _**Új mappa**_ gombra kattintással a Részleteken belül többszintű struktúrába rendezve hozhatóak létre a mappák.

<!-- /wp:paragraph -->

<!-- wp:image {"align":"right","id":32694,"width":443,"height":346,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://www.consteelsoftware.com/wp-content/uploads/2022/02/reszlet_kezelo_kivalaszt.png)](./img/wp-content-uploads-2022-02-reszlet_kezelo_kivalaszt.png)

<!-- /wp:image -->

<!-- wp:image {"align":"right","id":32680,"width":263,"height":110,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://www.consteelsoftware.com/wp-content/uploads/2022/02/reszlet_kezelo_reszet_neve.png)](./img/wp-content-uploads-2022-02-reszlet_kezelo_reszet_neve.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

\#4 ![](./img/wp-content-uploads-2022-02-reszlet_kezelo_uj_reszlet.png) Az _**Új részlet**_ gombra kattintással új részlet hozható létre abban a mappában, amelyik épp ki van jelölve. Ha előzőleg megtörtént az elemek kiválasztása is, úgy azok egyből hozzá is rendelődnek az új részletmodellhez. A felugró ablakban meg kell adni az új részlet nevét, majd a **Rendben** gombra kattintva a részlet létrejön.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Egy részlet modell bekapcsolásához be kell jelölni a részlet neve előtt található jelölő négyzetet. Egyszerre több részletmodell is bekapcsolható, és egy objektum egyszerre több részletmodellnek is része lehet.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

\#5 Ha a _**Részlet kezelő**_ fül alján található _„Az elrejtett részek megjelenítése áttetszően”_ jelölő négyzet be van kapcsolva, akkor a modell elrejtett része is megjelenik áttetsző halvány szürke színnel.

<!-- /wp:paragraph -->

<!-- wp:spacer {"height":"1px"} -->

<!-- /wp:spacer -->

<!-- wp:image {"align":"right","id":32602,"width":256,"height":190,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://www.consteelsoftware.com/wp-content/uploads/2022/02/reszlet_kezelo_modositas_tipus.png)](./img/wp-content-uploads-2022-02-reszlet_kezelo_modositas_tipus.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

\#6 ![](./img/wp-content-uploads-2022-02-reszlet_kezelo_modosit.png) Lehetőség van létrehozott részletmodellek módosítására is. A meglévő részlethez hozzáadhatunk vagy elvehetünk elemeket. Ehhez először ki kell választani a modell megfelelő részét, majd a módosítani kívánt részletmodell nevét is. Végül a _**Módosítás**_ gombra kattintva megjelenik a _**Részlet módosítása**_ ablak a következő opciókkal:


- **Kijelölt elemek hozzáadása a részlethez:** a _**Rendben**_ gombra kattintva a kijelölt elemek az aktív részmodellhez hozzáadódnak. Ha a kijelölt elemek közül néhány eleve ehhez a részmodellhez tartozott, akkor ezek státusza nem változik.

- **Kijelölt elemek kivonása a részletből:** a kijelölt elemek nem lesznek részei az aktuális részletmodellnek.

- **Részlet módosítása csak kijelölt elemekre:** az aktuális részmodell csak a kijelölt elemeket fogja tartalmazni.


7# ![](./img/wp-content-uploads-2022-02-reszlet_kezelo_torol.png) A törlés gombbal a kijelölt részlet törölhető.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

8# ![](./img/wp-content-uploads-2022-02-reszlet_kezelo_atnevez.png) A részletmodell átnevezése az átnevezendő részlet kiválasztása után az _**Átnevezés**_ gombra kattintással történik.

<!-- /wp:paragraph -->

<!-- wp:image {"align":"right","id":32687,"width":229,"height":152,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://www.consteelsoftware.com/wp-content/uploads/2022/02/reszlet_kezelo_szint_neve.png)](./img/wp-content-uploads-2022-02-reszlet_kezelo_szint_neve.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

9# Részlet modellek szintek alapján is létrehozhatók. Szint részleteket az _**Új szint**_ gombra kattintva ![](./img/wp-content-uploads-2022-02-reszlet_kezelo_uj_szint.png) lehet létrehozni. A felugró „Szint felvétele” ablakban megadható a szint neve és a magassága. A magasság felvehető a fekete nyílra kattintás után a modell egy pontjának a kijelölésével is. A szint magassága megjelenik a szint neve után. Minden olyan szerkezeti elem része lesz a szint részletnek, ami az adott szinten helyezkedik el. Amennyiben vannak a modellben az adott szintnél magasabban elhelyezkedő elemek is, melyek nem tartoznak más szintbe, azok automatikusan az adott szinthez fognak tartozni.