---
sidebar_position: 2
---
# A Consteel 17 újdonságai
<!-- wp:paragraph -->

2023-ban elsődlegesen egy központi témakörre, a szoftver használatának megkönnyítésére összpontosítottunk. Az újdonságok között olyan praktikus funkciókat találunk, melyek a hatékony modell használatot, könnyű módosíthatóságot és világos adatszolgáltatást segítik elő mind a Consteel-ben, mind Descript-ben és felhőalapú platformunkon, a Steelspace-en is.

<!-- /wp:paragraph -->

<!-- wp:heading -->

## **Automata részletmodellek**

<!-- /wp:heading -->

<!-- wp:paragraph -->

Az ügyfeleink igényeinek kielégítése érdekében létrehoztunk egy gyűjteményt a gyakran használt részlet kategóriákból és kifejlesztettünk egy új automata részletmodell funkciót a meglévő funkció mellé. Az [automata részletmodell](../manual/3_0_model-view/3_3_portions-manager.md) automatikusan generál részleteket az alábbi kategóriák alapján csoportosítva: szelvényük, anyagminőségük, térbeli elhelyezkedésük és legnagyobb kihasználtságuk alapján rúdelemek, valamint vastagságuk, anyagminőségük és elhelyezkedésük alapján lemezelemek esetén. Az automata részletek mindig frissülnek a modell állapotának megfelelően és a kézi részletekkel együtt is használhatóak.

<!-- /wp:paragraph -->

<!-- wp:heading -->

## **Húzott rúd (X Brace)**

<!-- /wp:heading -->

<!-- wp:paragraph -->

A húzott rúd elemek speciális nemlineáris viselkedése problémákat okozhat a lineáris számításokban. Ezen kihívások kezelésére bevezettünk egy új fejlesztést. A legújabb frissítéssel a felhasználó most már a [Húzott rúd](../manual/5_0_structural-modeling/5_2_line-members.md#rúdelemek) (pótátlós merevítés) végeselem típust állíthat be ezeknek az elemeknek. Az így megjelölt elemek a rugalmas sajátérték számításhoz szükséges linearizálás miatt, mint húzott-nyomott elemek lesznek figyelembevéve, 50%-ra csökkentett keresztmetszeti jellemzőkkel.

<!-- /wp:paragraph -->

<!-- wp:heading -->

## **Teherátadó felületek továbbfejlesztése**

<!-- /wp:heading -->

<!-- wp:paragraph -->

A teherátadó [felületi teher](../manual/6_0_structural-loads/6_3_load-types.md#teherátadó-felület) szétosztásának javítása érdekében most már a felhasználók képesek szerkeszteni a keletkező vonalmenti terhek tulajdonságait azoknak a felületi teherről való leválasztása után. Ezenkívül a felhasználók szabályozhatják a vonalmenti terhek újragenerálását.

<!-- /wp:paragraph -->

<!-- wp:heading -->

## **Kiterjesztett és egyesített tervezési eredmények**

<!-- /wp:heading -->

<!-- wp:paragraph -->

A [tervezési eredmények](../manual/9_0_standard-design/9_1_steel-design.md#eredmények) megjelenítését és kezelését módosítottuk a felhasználói igényeknek megfelelően. Összevontuk az ULS és az SLS vizsgálatok végrehajtását és az eredmények megjelenítését. Ennek megfelelően a mértékadó tervezési eredmények közvetlenül elérhetőek az összes határállapot figyelembevételével. Ezenkívül minden teherkombinációból az összes kihasználtság mentésre került és megjeleníthető, lehetővé téve a szerkezet megfelelőségének részletesebb vizsgálatát.

<!-- /wp:paragraph -->

<!-- wp:heading -->

## **Szoftver interakciók új környezetben**

<!-- /wp:heading -->

<!-- wp:paragraph -->

A szoftverek közötti interakciók lehetőségeinek bővülése egy SDK alapú környezet bevezetésével valósult meg, melynek segítségével mind a Consteellel, mind a Steelspace-szel kompatibilis általános formátumba (.smadsteel) való konverzió vált lehetővé. Az új környezetben először az [AXISVM](../plugins/axis/axisvm-plugin.md) szerkezeti analízis szoftverhez került kifejlesztésre egy plugin. Ezzel a megközelítéssel az AXISVM modellek most már konvertálhatók .smadsteel formátumba, lehetővé téve azok megnyitását a Consteelben. A konverzió nem csak geometriai és szelvény adatokra, hanem mechanikai objektumokra (támaszok, kényszerek stb.), terhekre és teherkombinációkra is kiterjed. A környezet továbbá lehetőséget teremt különböző szintű szelvény és anyag konverzióra, valamint az folyamat sikerességéről szóló átfogó dokumentáció elkészítésére, mely magában foglalja a problémás modellobjektumok vizualizációját is.

<!-- /wp:paragraph -->

<!-- wp:heading -->

## [**Descript**](https://www.consteelsoftware.com/hu/knowledgebase/mydescript-your-personal-scripting-environment-in-consteel/?search=) **fejlesztések**

<!-- /wp:heading -->

<!-- wp:paragraph -->

Ahogy egyre nagyobb népszerűségnek örvend a szkriptnyelvünk, egyre több kérést kapunk. Ezekre a szükségletekre válaszul új funkciókat adtunk hozzá és fejlesztettük a nyelvet. Az újdonságok között vannak új parancsok, például egyedi hidegen alakított keresztmetszet létrehozása vagy objektumhivatkozási lekérdezések; valamint az objektum létrehozás, kezelés és lekérdezés kiterjesztett lehetőségei.


## **Hatékony modellezést segítő fejlesztések (felhasználói kérések)**


A felhasználóink kéréseire válaszul ez a verzió több fejlesztést tartalmaz, mely könnyíti a Consteel használatát:

- kiválasztott elemek [elrejtése](../manual/3_0_model-view/3_1_model-views.md#modell-nézetek)

- [másolás és mozgatás](../manual/1_0_general-description/1_2_the-main-window.md#oldalsáv) funkció szétválasztása

- [anyagminőség](../manual/5_0_structural-modeling/5_1_section-administration.md#szelvénykezelő) módosítása egyszerre több acélszelvényre

- [rúdelemeken](../manual/1_0_general-description/1_2_the-main-window.md#objektumfa-objektum-tulajdonságok-és-diagnosztika-ablakok) színezett kezdő és végpontok

- gyors [kiválasztás](../manual/3_0_model-view/3_1_model-views.md) tulajdonság alapján duplaklikkel az objektum tulajdonság ablakban

- szerkezeti elem kijelölése analízis vagy szabványos tervezési [eredmény táblázatból](../manual/9_0_standard-design/9_1_steel-design.md#eredmények)

## **Részletes modellösszehasonlítás**


A felhasználók összehasonlíthatják a mentett mérföldköveket és modellezési fázisokat a Steelspace-ben bevezetett új funkcióval. Az összehasonlítás testre szabható a felhasználók számára releváns objektumokra és attribútumokra összpontosítva. Az összehasonlítási eredmények látványosan mutatják a paraméter különbségeket, melyek látványosan ki vannak emelve. A felhasználói felület elemei közül a kiválasztás fül és az objektumtulajdonságok megjelenítője átdolgozásra kerültek annak érdekében, hogy az összehasonlításkor a két verzióban található adatok különbségei könnyen hozzáférhetővé váljanak.

<!-- /wp:paragraph -->

<!-- wp:heading -->

## **Elérhető a Metszősík funkció a **[**Steelspace**](https://steelspace.io/)**-ben!**

<!-- /wp:heading -->

<!-- wp:paragraph -->

A jobb láthatóság érdekében bevezettük a metszősík funkciót a Steelspace-be. Ez az eszköz lehetővé teszi a felhasználók számára, hogy létrehozzanak egy metszősík objektumot, ami egy síkot képvisel, és levágja az adott nézetablakban található geometriai elemeket.

<!-- /wp:paragraph -->

<!-- wp:heading -->

## **Továbbfejlesztett együttműködési lehetőségek**

<!-- /wp:heading -->

<!-- wp:paragraph -->

A modell verzióelőzmények bevezetésével ügyfeleink mostantól különböző jogosultsági szintekkel testre szabott hozzáférést biztosíthatnak modelljeikhez több mérnök vagy csapattag számára. Ennek a módszernek a segítségével több ember menthet új verziókat ugyanazon projekt verzióelőzményébe, minden verzió tartalmazza a létrehozó adatait.

<!-- /wp:paragraph -->
