---
sidebar_position: 5
---
# A szerkezet és a csomópontok kölcsönhatása
<!-- wp:paragraph -->

A legújabb tervezési eljárások képesek figyelembe venni a globális szerkezeti modell és a szerkezeti kapcsolatok közötti kölcsönhatásokat (merev, fél-merev vagy csuklós), amelynek következtében az eredmény valósághűbb és gazdaságosabb. Ennek feltétele a korábbiaknál élethűbb modell felépítés, amely a mérnöktől komolyabb erőfeszítést kíván a modellezés során. _Consteel_-ban a csomópontokat manuálisan, vagy a modell geometria felhasználásával hozhatunk létre a csomópont felismerése funkció segítségével, amely megvizsgálja kapcsolódó szerkezeti elemek helyzetét és a szelvényeket, és felajánlja az adott elrendezéshez létrehozható csomóponttípusokat. A csomópont létrehozását követően a csomópontokat elhelyezhetjük a modellen és a csomóponti merevségek automatikusan felhasználhatók a globális szerkezet analíziséhez. Az elhelyezett kapcsolatok ellenőrzése az újabb analíziseredmények esetén újra megtörténik.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

A csomópontok elhelyezése a **Szerkezeti elemek** fülön található **[Csomópont elhelyezése](/manual/csomopont-modul/csomopont-letrehozasa/#Place-joint-in-the-global-model)** ![](./img/wp-content-uploads-2021-04-15-6-place-butt.png) ikonra kattintva megjelenő ablak segítségével lehetséges. Egy csomópont az összes olyan helyre elhelyezhető, ahol a geometria megegyezik a csomóponti geometriával. Az így elhelyezett csomópontok kapcsolati merevsége már figyelembe vehető a szerkezetek analízise során. A kapcsolati merevség figyelembevételéhez be kell jelölni az **Analízis beállításai** ablak, **Globális beállítások** szakaszában található _Kapcsolati merevség figyelembe vétele_ jelölőnégyzetet, melynek hatására az összes elhelyezett csomópont merevsége az összes kombinációban figyelembe lesz véve.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Ha csak bizonyos kombinációban van erre szükség, akkor a **Globális beállítások** szakasz [_aloldalát_](/manual/szerkezetek-analizise/analizis-beallitasok/#subpage-of-global-settings) kell megnyitni a ![](./img/wp-content-uploads-2021-04-cmd_subpage.png) ikon segítségével, ahol egyenként bejelölhetők azok a kombinációk, amelyeknél szükség van a merevségek átvitelére.

<!-- /wp:paragraph -->

<!-- wp:image {"align":"center","id":38675,"width":490,"height":226,"sizeSlug":"full","linkDestination":"media","className":"is-style-editorskit-rounded"} -->

[![](https://consteelsoftware.com/wp-content/uploads/2022/06/dial_analizis_kapcsolati-merevseg.png)](./img/wp-content-uploads-2022-06-dial_analizis_kapcsolati-merevseg.png)

<!-- /wp:image -->
