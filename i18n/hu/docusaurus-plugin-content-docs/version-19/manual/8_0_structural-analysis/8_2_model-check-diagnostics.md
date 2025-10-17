---
sidebar_position: 2
---
# Modell ellenőrzés (diagnosztika)
<!-- wp:paragraph {"align":"justify"} -->

A számítások futtatása előtt elvégezhető egy modell ellenőrzés. Az ellenőrzés automatikusan lefut minden végeselem modell generálás és analízis futtatása előtt, de elindítható függetlenül is a modellezés bármelyik fázisában ( a **[Nézet ](../1_0_general-description/1_2_the-main-window.md#nézet-menü)** menü „_Diagnosztika…_” funkciójával lehet megjeleníteni a [Diagnosztika ablakot](../1_0_general-description/1_2_the-main-window.md#diagnosztika-ablak), ahol a Diagnosztika gombbal indítható). Az automatikusan futó és a felhasználó által indított diagnosztika vizsgálatok nem teljesen egyeznek meg egymással.

<!-- /wp:paragraph -->

<!-- wp:paragraph {"align":"justify"} -->

Két típusú diagnosztika üzenet lehetséges:

<!-- /wp:paragraph -->

<!-- wp:list -->

- **Hiba**: a hibák lehetetlenné teszik a modell számítását vagy értelmetlenné teszi az elvégzését. Hiba esetén számításokat nem lehet végrehajtani
- **Figyelmeztetés**: a figyelmeztetés mellett elvégezhetők a számítások, de felhívja a figyelmet a lehetséges hibákra

<!-- /wp:list -->

<!-- wp:paragraph -->

Az ellenőrzés első lépéseként a szoftver a felhasználói modellt ellenőrzi (alapellenőrzés). Második lépésként a generált végeselemes modellt ellenőrzi a program (számítás előtti ellenőrzés).

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Az alábbi alapellenőrzések kerülnek elvégzésre:

<!-- /wp:paragraph -->

<!-- wp:list -->

- van e teher a szerkezeten
- van e támasz a szerkezeten
- rudak, vonalmenti és erők és támaszok hosszának ellenőrzése
- felületi elemek lemezvastagságainak és végeselem méreteinek ellenőrzése
- átlapolás, kiékelés hosszának és elhelyezésének ellenőrzése
- többszörös támasz elhelyezésének ellenőrzése
- húzott elemek megfelelősségének ellenőrzése (nem lehet íves elem)

<!-- /wp:list -->

<!-- wp:paragraph -->

Az alábbi számítás előtti ellenőrzések kerülnek elvégzésre:

<!-- /wp:paragraph -->

<!-- wp:list -->

- van-e túllógó vonalmenti erő és teher
- pontbeli terhek és támaszok a szerkezeten vannak e
- felületi elemek átlapolása
- rúdelemek átlapolása
- nagyon kis távolság (&lt;5 mm) a felületek, rudak, terhek, támaszok pontjai és vonalai között (a határtávolságok az _[Opciók](../1_0_general-description/1_2_the-main-window.md#opciók-menü)_ menüben állíthatók)

<!-- /wp:list -->

<!-- wp:paragraph -->

A figyelmeztetéssel vagy hibával megjelölt objektumok kiválaszthatók és kitörölhetők a diagnosztika eredmény ablakon.

<!-- /wp:paragraph -->
