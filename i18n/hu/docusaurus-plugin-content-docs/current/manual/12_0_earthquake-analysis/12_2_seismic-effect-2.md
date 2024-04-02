---
sidebar_position: 3
---
# Földrengés hatás

<!-- wp:paragraph {"align":"justify"} -->

A Tömegek fülön található **Földrengés hatás** (![](./img/wp-content-uploads-2021-04-13-3-Seismic-effect.png)) funkció segítségével hozható létre új földrengés hatás. A megjelenő hatás dialógon lehet megadni minden olyan paramétert és beállítást, amely a földrengés analízishez szükséges.

<!-- /wp:paragraph -->

<!-- wp:paragraph {"align":"justify"} -->

Földregés hatás definiálásához már létrehozott tömegkombináció és válaszspektrum szükséges (lásd **[7. ](/manual/tomegek/)**_[Tömegek](/manual/tomegek c. fejezetet_)!

<!-- /wp:paragraph -->

<!-- wp:paragraph {"align":"justify"} -->

Új földrengés hatás az **Új** gomb megnyomásával hozható létre. Egyszerre több földrengés hatás is definiálható. Az egyes hatások között a legfelső **Név** mezőben található legördülő menü segítségével válthatók.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

A megjelenő **Földrengés hatás** dialóg beállításai az alábbi két fülre kerültek szétosztásra:

<!-- /wp:paragraph -->

<!-- wp:list -->

- Földrengés beállítások
- További hatások

<!-- /wp:list -->

<!-- wp:heading {"level":3} -->

### Földrengés beállítások

<!-- /wp:heading -->

<!-- wp:paragraph -->

A _Beállítások_ (#1) mezőben lehet megadni az földrengés analízis legfőbb paramétereit.

<!-- /wp:paragraph -->

<!-- wp:list -->

- _Tömegkombináció:_ meg kell adni, hogy a Modális válaszspektrum-analízishez szükséges dinamikai alakok számításához melyik tömegkombinációt használja a program. A legördülő menüből bármely, előzőleg már definiált tömeg kombináció kiválasztható.  
  **A földrengés analízis csak erre a kiválasztott tömegkombinációra fog futni!**
- _Számítási mód:_ a legördülő menü segítségével kiválasztható a használni kívánt számítási mód. A számítási módok leírását és összehasonlítását lásd a **[Földrengés analízis lépései](/manual/foldrenges-analizis/foldrenges-analizis-lepesei/)** c. fejezetben!
- _Szerkezet fő teherviselési iránya az X tengelytől:_ a szerkezet fő teherviselési iránya megadható a fekete nyíl gomb (![](./img/wp-content-uploads-2021-04-ico-pointer.png)) megnyomásával a modelltérben egy irányvektorral, vagy a globális X tengelytől fokban. A megadott irányba lesz értelmez a földrengés hatás 1-es iránya, a q1 tényező, illetve erre merőlegesen a földrengés hatás 2-es iránya és a q2 tényező

<!-- /wp:list -->

<!-- wp:image {"align":"center","id":37729,"width":470,"height":597,"sizeSlug":"full","linkDestination":"media","className":"is-style-editorskit-rounded"} -->

[![](https://consteelsoftware.com/wp-content/uploads/2022/06/dial_foldrenges_foldr_hatas.png)](./img/wp-content-uploads-2022-06-dial_foldrenges_foldr_hatas.png)

<!-- /wp:image -->

<!-- wp:paragraph {"align":"justify"} -->

A _Válaszspektrum_ (#2) mezőben lehet kiválasztani a földrengés analízis során használni kívánt válaszspektrumot, válaszspektrumokat.

<!-- /wp:paragraph -->

<!-- wp:image {"align":"center","id":37737,"sizeSlug":"full","linkDestination":"media","className":"is-style-editorskit-rounded"} -->

[![](https://consteelsoftware.com/wp-content/uploads/2022/06/dial_foldrenges_foldr_hatas_spektrum.png)](./img/wp-content-uploads-2022-06-dial_foldrenges_foldr_hatas_spektrum.png)

<!-- /wp:image -->

<!-- wp:paragraph {"align":"justify"} -->

A válaszspektrumok kezelése a tervezési és a használhatósági határállapotban az alábbiak szerint történhet:

<!-- /wp:paragraph -->

<!-- wp:list -->

- ULS válaszspektrum és qd faktorok alkalmazása  
  Ebben az esetben csak az ULS vizsgálathoz választható szabványos vagy tervezési egyedi válaszspektrum. Az SLS vizsgálatokhoz szükséges elmozdulást a program a megadott qd elmozdulási viselkedési tényező segítségével állítja elő a program az ULS eredményekből.

<!-- /wp:list -->

<!-- wp:list -->

- Külön válaszspektrum alkalmazása ULS és SLS határállapotokhoz  
  A _Rugalmas válaszspektrum SLS vizsgálatokhoz_ opció használata esetén, külön válaszspektrum adható meg ULS és külön spektrum SLS határállapotokhoz. ULS határállapothoz csak szabványos vagy egyedi tervezési válaszspektrum, míg SLS határállapothoz csak szabványos vagy egyedi rugalmas válaszspektrum választható ki a legördítő menü segítségével

<!-- /wp:list -->

<!-- wp:paragraph {"align":"justify"} -->

A három pontos (![](./img/wp-content-uploads-2021-04-13-3-1-3buttons.png)) gombra kattintva megnyitható és megtekinthető a kiválasztott válaszspektrum, vagy _[új spektrum hozható létre.](/hu/manual/tomegek/valaszspektrum-felvetele/)_

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

A _Viselkedési tényező_ (#3) mezőben megadhatók az egyes földrengési főirányhoz tartozó viselkedési és elmozdulási viselkedési tényezők.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

A megadható viselkedési tényezők az alkalmazott válaszspektrum(ok) típusától függe(nek):

<!-- /wp:paragraph -->

<!-- wp:table {"className":"is-style-stripes"} -->

|                                                                           | **Viselkedési tényező (q)**                                                                                  | **Elmozdulási viselkedési tényező (qd)** |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ | ---------------------------------------- |
| **ULS tervezési spektrum és qd faktor alkalmazása**               | Szabványos spektrum esetén megadható Egyéni tervezési spektrum esetén a spektrum tartalmazza; nem adható meg | Megadható                                |
| **Külön válaszspektrum alkalmazása ULS és SLS határállapotokhoz** | Szabványos spektrum esetén megadható Egyéni tervezési spektrum esetén a spektrum tartalmazza; nem adható meg | Nem adható meg                           |

<!-- /wp:table -->

<!-- wp:paragraph -->

A spektrum típusán túl, a megadható viselkedési tényezők az alábbi opcióktól is függenek:

<!-- /wp:paragraph -->

<!-- wp:list -->

- _Függőleges földrengés hatás figyelembevétele:_ az opció segítségével megadható, hogy a számítás során figyelembevételre kerüljön-e a függőleges földrengéshatás. Az opció bekapcsolása esetén a függőleges viselkedési tényezőket is meg adni

<!-- /wp:list -->

<!-- wp:list -->

- _Megegyező viselkedési tényező a vízszintes irányokban:_ az opció bekapcsolása esetén, a vízszintes irányokban (1 és 2 földrengési főirányok) elegendő egy tényezőt megadni

<!-- /wp:list -->

<!-- wp:paragraph -->

A _Megjelenített válaszspektrum_ (#4) mezőben megtekinthető, a földrengés hatáshoz hozzárendelt és a legördülő menü segítségével kiválasztott tervezési vagy elasztikus válaszspektrum. A grafikonon történő mozgással megtekinthetők a spektrum függvény értékei.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### További hatások

<!-- /wp:heading -->

<!-- wp:paragraph -->

A **További hatások** fülön lehet megadni az alábbi, földrengés hatáshoz kapcsolódó hatások paramétereit:

<!-- /wp:paragraph -->

<!-- wp:list -->

- Rendkívüli csavaró hatás: Térbeli modellek esetén figyelembe kell venni a tömegek elhelyezkedéséből és a szeizmikus hatás térbeli változásaiból eredő bizonytalanság okozta rendkívüli csavaró hatást. A hatást a Consteel automatikusan számítja. A számításhoz épület szinteken kell megadni, ahol a csavaró hatás működik, illetve egy véletlen külpontosság értéket, amellyel a tömegpontok kimozdításra kerülnek.

<!-- /wp:list -->

<!-- wp:list -->

- _Másodrendűségi hatás_: a másodrendű hatásokat akkor kell figyelembe venni, ha a szintek közötti eltolódás különbség együtthatója (θ) nagyobb, mint 0,1. Ezt a Consteel automatikusan számítja és figyelembe veszi. A számításhoz szükséges épület szinteket megadni

<!-- /wp:list -->

<!-- wp:paragraph {"align":"justify"} -->

A _Csavaró és másodrendű hatásoknál figyelembe vett szintek_ (#1) mezőben kell megadni, hogy a Consteel mely szinteket vegye figyelembe, mint épület szintek a számítás során.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

A táblázat a _**[Részlet kezelőben](/hu/manual/modell-nezet/reszlet-kezelo/)**_ már előzőleg létrehozott szinteket tartalmazza. A szintek nevei előtt található jelölő négyzetek bepipálásával lehet kiválasztani, a számítás során figyelembe veendő épület szinteket.

<!-- /wp:paragraph -->

<!-- wp:image {"align":"left","id":21420,"width":76,"height":81,"sizeSlug":"large","linkDestination":"none"} -->

![](./img/wp-content-uploads-2021-04-warning_croc.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

A szintek megadásával kapcsolatban fontos tudni, hogy a Consteel a legalsó beadott szint alatti szerkezet tömegeit mind a legalsó szinthez tartozónak veszi figyelembe a csavaró és másodrendű hatásoknál. Ez elkerülhető azzal, ha létrehozunk egy 0 szintet a támaszok síkján, így a támasz és az első szint között is megtörténik a tömegek szétosztása.

<!-- /wp:paragraph -->

<!-- wp:image {"align":"center","id":37745,"width":428,"height":550,"sizeSlug":"full","linkDestination":"media","className":"is-style-editorskit-rounded"} -->

[![](https://consteelsoftware.com/wp-content/uploads/2022/06/dial_foldrenges_foldr_tovabbi_hatas.png)](./img/wp-content-uploads-2022-06-dial_foldrenges_foldr_tovabbi_hatas.png)

<!-- /wp:image -->

<!-- wp:paragraph {"align":"justify"} -->

A _Rendkívüli csavaróhatás_ (#2) mezőben, a legördítő menü segítségével lehet bekapcsolni a csavaróhatás figyelembevételét, illetve, hogy milyen kombinációkat vegyen figyelembe a program a tömegpontok elmozdításánál:

<!-- /wp:paragraph -->

<!-- wp:list -->

- \+eaX+eaY, - eaX-eaY: az opció használata esetén, a Consteel a tömegpontokat, mind a globális X és Y vízszintes pozitív és negatív irányokban kimozdítja a megadott mértékben. Egyszerűsítő eljárás. Csökkenti a szükséges földrengéses kombinációk számát
- \+eaX+eaY, +eaX-eaY, -eaX+eaY, - eaX-eaY: az opció használata esetén, a Consteel a tömegpontokat a globális X és Y vízszintes irányokban egyező és ellentétes előjellel is kimozdítja a megadott mértékben. EuroCode által megadott eljárás, viszont jelentősen növeli a földrengéses kombinációk számát

<!-- /wp:list -->

<!-- wp:paragraph -->

A tömegpontok elmozdításának értékét a szerkesztőmezőben százalékos értékkel lehet megadni.

<!-- /wp:paragraph -->
