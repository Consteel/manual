---
sidebar_position: 1
---
# Teheresetek és tehercsoportok

<!-- wp:image {"align":"left","id":35694,"width":229,"height":50,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://Consteelsoftware.com/wp-content/uploads/2022/05/tab_terhek_teheresetek.png)](./img/wp-content-uploads-2022-05-tab_terhek_teheresetek.png)

<!-- /wp:image -->

<!-- wp:spacer {"height":"10px"} -->

<!-- /wp:spacer -->

<!-- wp:image {"align":"right","id":35702,"width":360,"height":390,"sizeSlug":"full","linkDestination":"media","className":"is-style-editorskit-rounded"} -->

[![](https://Consteelsoftware.com/wp-content/uploads/2022/05/dial_teher-csoportok.png)](./img/wp-content-uploads-2022-05-dial_teher-csoportok.png)

<!-- /wp:image -->

<!-- wp:paragraph {"align":"justify"} -->

Teherelhelyezés előtt létre kell hozni a tehereseteket és tehercsoportokat a **_Terhek_** fülön található **_Teheresetek és tehercsoportok megadása_** (![](./img/wp-content-uploads-2021-04-cmd_loadgroups.png)) funkció segítségével. Minden új modell megnyitásakor alapértelmezetten létrejön egy tehercsoport és egy tehereset.

<!-- /wp:paragraph -->

<!-- wp:image {"align":"right","id":35772,"width":88,"height":165,"sizeSlug":"full","linkDestination":"media","className":"is-style-editorskit-rounded"} -->

[![](https://Consteelsoftware.com/wp-content/uploads/2022/05/terhek_tehercsoport_tipusok.png)](./img/wp-content-uploads-2022-05-terhek_tehercsoport_tipusok.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

Egy tehercsoport több teheresetet tartalmazhat. A teherkombinációk automatikus generálásához megfelelően létrehozott tehercsoportok szükségesek!

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

9 különböző tehercsoport található a _Consteel_-ban: Állandó, Esetleges, Meteorológiai, Szél, Hó, Daru, Rendkívüli, Rendkívüli hó és Szeizmikus.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

A létrehozott tehercsoportok és teheresetek a párbeszédpanel bal oldalán találhatók. A jobb oldal két részre van osztva: a felső rész a tehercsoportok létrehozására, az alsó rész pedig a teheresetek létrehozására szolgál.

<!-- /wp:paragraph -->

<!-- wp:spacer {"height":"10px"} -->

<!-- /wp:spacer -->

<!-- wp:image {"align":"right","id":35780,"width":337,"height":281,"sizeSlug":"full","linkDestination":"media","className":"is-style-editorskit-rounded"} -->

[![](https://Consteelsoftware.com/wp-content/uploads/2022/05/dial_kombinacios_tenyezok.png)](./img/wp-content-uploads-2022-05-dial_kombinacios_tenyezok.png)

<!-- /wp:image -->

<!-- wp:heading {"level":3} -->

### Új tehercsoport létrehozása

<!-- /wp:heading -->

<!-- wp:paragraph -->

Az **_Új tehercsoport_** gomb megnyomásával láthatóvá válnak a szabványos tehercsoportok. A lista a választott [tervezési szabványtól](../1_0_general-description/1_2_the-main-window.md#a-menü) függ. A tehercsoport kiválasztásával létrehozható az új csoport.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

A tehercsoport automatikusan kap egy, a típusának megfelelő nevet, ami ezután a párbeszédpanel felső részén módosítható.

<!-- /wp:paragraph -->

<!-- wp:paragraph {"align":"justify"} -->

A biztonsági tényezők minden tehercsoportnál a kiválasztott szabványnak megfelelőek, és itt nem változtathatók meg. Ha eltérő biztonsági tényezőket szeretne megadni, akkor létre kell hoznia egy felhasználói tervezési szabványt a [tervezési szabványok párbeszédpanelen](../1_0_general-description/1_2_the-main-window.md#a-menü).

<!-- /wp:paragraph -->

<!-- wp:image {"align":"right","id":35788,"width":310,"height":254,"sizeSlug":"full","linkDestination":"media","className":"is-style-editorskit-rounded"} -->

[![](https://Consteelsoftware.com/wp-content/uploads/2022/05/dial_teher_csoport.png)](./img/wp-content-uploads-2022-05-dial_teher_csoport.png)

<!-- /wp:image -->

<!-- wp:paragraph {"align":"justify"} -->

Az esetleges tehercsoportok (esetleges, meteorológiai, daru) esetében a kombinációs tényezőket is meg kell adni. A kombinációs tényezők megadhatók manuálisan, vagy kiválaszthatók a **_Tényezők szabványos értékei_** gombra kattintva. A megjelenő párbeszédablakban az Eurocode és a spanyol EAE szabvány által megadott tipikus esetek választhatók ki. A tényezők értékei a kiválasztott Nemzeti melléklettől függenek. A kívánt értékek a sor elején található jelölőnégyzettel választhatók ki.

<!-- /wp:paragraph -->

<!-- wp:spacer {"height":"1px"} -->

<!-- /wp:spacer -->

<!-- wp:image {"align":"right","id":35796,"width":315,"height":293,"sizeSlug":"full","linkDestination":"media","className":"is-style-editorskit-rounded"} -->

[![](https://Consteelsoftware.com/wp-content/uploads/2022/05/dial_teher_eset.png)](./img/wp-content-uploads-2022-05-dial_teher_eset.png)

<!-- /wp:image -->

<!-- wp:heading {"level":3} -->

### Új tehereset létrehozása

<!-- /wp:heading -->

<!-- wp:paragraph -->

Új tehereseteket a párbeszédpanel jobb alsó részén található **Új tehereset** gombra kattintva lehet létrehozni. A panel tetején három szerkesztőmező található, amelyek minden tehereset-típusnál közösek:

<!-- /wp:paragraph -->

<!-- wp:list -->

- Név: a tehereset neve
- Tehercsoport: meg lehet változtatni a tehereset tehercsoportját. Egyúttal a teheresetek fáján is a megfelelő csoportba kerül át a tehereset.
- Szín: meg lehet változtatni azt a színt, amellyel a tehereset a modellben megjelenik.

<!-- /wp:list -->

<!-- wp:paragraph -->

Egyéb lehetőségeket lásd alább.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Önsúly

<!-- /wp:heading -->

<!-- wp:paragraph -->

A _Consteel_ szükség esetén hozzáadhatja a szerkezet önsúlyát az egyik teheresethez. Ehhez válassza ki a megfelelő terhelési esetet a párbeszédpanel jobb alsó sarkában.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Az automatikus kombinációgenerálás beállítási lehetőségei

<!-- /wp:heading -->

<!-- wp:paragraph -->

Az automatikus kombinációgenerálás lásd a [**_Teherkombinációk_**](../6_0_structural-loads/6_2_load-combinations.md) a kiválasztott tervezési szabvány szabályai, valamint a tehercsoportok és teheresetek beállításai szerint működik, melyek befolyásolják a kombinációs tényezők értékeit. A megfelelő kombinációkhoz az egyes teheresetekhez tartozó szabályozókat helyesen kell beállítani. Ezek a beállítások a következők:

<!-- /wp:paragraph -->

<!-- wp:list -->

- "_A teheresetek egymással egyidejűleg is szerepelhetnek_" - csak az esetleges és a meteorológiai tehercsoport-típusok esetében jelenik meg, és egységesen vonatkozik a tehercsoport összes teheresetére.

  - nincs bejelölve (alapértelmezés) - ebből a tehercsoportból csak egy tehereset szerepelhet bármely kombinációban.
  - bejelölve - egy kombinációban ennek a tehercsoportnak akár több teheresete is szerepelhet.

- "_A terhek hatása kedvező is lehet egy kombinációban_" - a rendkívüli tehercsoportok kivételével bármely teheresethez megadható.

  - nincs bejelölve (alapértelmezés)

    - állandó tehereset - csak a kedvezőtlen biztonsági tényező lesz alkalmazva
    - esetleges tehereset - az alapértelmezett biztonsági tényező lesz alkalmazva

  - bejelölve

    - állandó tehereset - kedvező és kedvezőtlen biztonsági tényezők egyaránt alkalmazva lesznek.
    - esetleges tehereset - a biztonsági tényező nulla is lehet a kombinációkban

- "_Nem lehet kiemelt tartós és ideiglenes kombinációban_"

  - nincs bejelölve (alapértelmezés) - a tehereset lehet kiemelt hatás tartós és ideiglenes tervezési kombinációkban is
  - bejelölve - a tehereset sosem lehet kiemelt hatás tartós és ideiglenes kombinációban

- "_Nem lehet kiemelt rendkívüli kombinációkban_"

  - nincs bejelölve (alapértelmezés) - a tehereset lehet kiemelt hatás rendkívüli kombinációkban
  - bejelölve - a tehereset sosem lehet kiemelt hatás rendkívüli kombinációkban

<!-- /wp:list -->
