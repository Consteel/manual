---
sidebar_position: 1
---
# Tömegesetek és tömegcsoportok

<!-- wp:paragraph -->

A szerkezeten ható tömegeket, mint a terhelés esetében, tömegcsoportokba és tömegesetekbe kell rendezni. Ennek megfelelően, mielőtt tömeget helyeznénk el a szerkezeten, létre kell hozni a szükséges tömegeseteket és csoportokat a Tömeg fülön lévő **Tömegesetek és tömegcsoportok megadása** (![](./img/wp-content-uploads-2021-04-cmd_masscases-1.png)) funkció segítségével.

<!-- /wp:paragraph -->

<!-- wp:image {"align":"center","id":36376,"width":299,"height":68,"sizeSlug":"full","linkDestination":"media","className":"is-style-editorskit-rounded"} -->

[![](https://Consteelsoftware.com/wp-content/uploads/2022/05/tab_tomegek_tomegesetek.png)](./img/wp-content-uploads-2022-05-tab_tomegek_tomegesetek.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

A megjelenő dialóg két jól elkülöníthető funkciócsoportra osztható.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

A dialóg bal oldalán (#1) található funkciók segítségével a **Teher** fülön már létrehozott terhek alakíthatók át automatikusa tömeggé, a dinamikai számítás számára. A dialóg jobb oldalán (#2) található funkciók segítségével pedig a kézzel elhelyezni kívánt tömegek számára hozhatók létre tömegesetek és csoportok.

<!-- /wp:paragraph -->

<!-- wp:image {"align":"center","id":36384,"width":597,"height":448,"sizeSlug":"full","linkDestination":"media","className":"is-style-editorskit-rounded"} -->

[![](https://Consteelsoftware.com/wp-content/uploads/2022/05/dial_tomegesetek.png)](./img/wp-content-uploads-2022-05-dial_tomegesetek.png)

<!-- /wp:image -->

<!-- wp:heading {"level":3} -->

### Teher tömeggé alakítása

<!-- /wp:heading -->

<!-- wp:paragraph -->

A **Teher** fülön már elhelyezett terhek, a **Tömegesetek és tömegcsoportok** dialóg baloldalán található _Teheresetek átalakítása_ mező segítségével átalakíthatók tömegekké. A _Teheresetek átalakítása_ mezőbe betöltődnek a Teher fülön előzőleg felvett tehercsoportok és teheresetek. A csoportok és esetek nevei előtt található jelölő négyzetek bepipálásával, a teheresetekben elhelyezett összes teher automatikusan átalakításra kerül tömeggé a dinamikai számítás számára.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Tehercsoport kiválasztása esetén, az összes, a csoportban található teheresetben lévő teher átalakításra kerül.

<!-- /wp:paragraph -->

<!-- wp:image {"align":"right","id":36392,"width":593,"height":448,"sizeSlug":"full","linkDestination":"media","className":"is-style-editorskit-rounded"} -->

[![](https://Consteelsoftware.com/wp-content/uploads/2022/05/dial_tomegesetek_kezi.png)](./img/wp-content-uploads-2022-05-dial_tomegesetek_kezi.png)

<!-- /wp:image -->

<!-- wp:heading {"level":3} -->

### Kézi tömegesetek és tömegcsoportok létrehozása

<!-- /wp:heading -->

<!-- wp:paragraph -->

A **Tömegesetek és tömegcsoportok** dialóg jobb oldalán található funkciók segítségével, a teheresetek és csoportok létrehozásával analóg módon, lehetőség van manuálisan is létrehozni tömegeseteket és csoportokat, a manuálisan elhelyezendő tömegek számára.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

A _Tömegcsoport_ mezőben lévő **Új** gomb megnyomásával, láthatóvá válnak a létrehozható tömegcsoportok: _Állandó, Esetleges_ és _Hó_. A megfelelő tehercsoport kiválasztásával létrejön az új csoport. A _Név_ mezőben átírható a létrehozott csoport neve.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

A _Tömegeset mezőben_ (#3) lévő **Új tömegeset** gomb segítségével új tömegeset hozható létre a _Kézi tömegesetek_ (#1) fában kiválasztott tömegcsoportban. Egy tömegcsoportban tetszőleges számú tömegeset hozható létre. A létrehozott tömegesetnek a _Név_ mezőben módosíthatók a nevei, illetve a színre kattintva, az elhelyezendő tömegobjektum(ok) színe.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

A létrehozott tömegesetek a _Kézi tömegesetek_ fában (#1) való kiválasztása után, a _Tömegeset_ mezőben lévő _Tömegcsoport legördítő_ menü segítségével, vagy a fában (#1), drag-and-drop funkció segítségével átmozgathatók.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Tömegirány figyelembevételének megadása

<!-- /wp:heading -->

<!-- wp:paragraph -->

A szerkezeten manuálisan elhelyezett tömegek és a teherből átalakított tömegek esetében is megadható, hogy mely irányokban működnek, a _Tömegirány figyelembevétele_ mező funkciói segítségével. A _Teheresetek átalakítása_ fában vagy a _Tömegesetek fában_ történt tömegeset kiválasztása után, lehetőség van megadni, hogy a kiválasztott esetben lévő tömegek mely irányokba működjenek. Földrengés számítás esetén csak a globális _Z_ irány kapcsolható ki/be a jelölő négyzet segítségével, míg rezgésvizsgálat esetén mind a három globális irány (_X_, _Y_ és _Z_) külön-külön is ki/bekapcsolható.

<!-- /wp:paragraph -->
