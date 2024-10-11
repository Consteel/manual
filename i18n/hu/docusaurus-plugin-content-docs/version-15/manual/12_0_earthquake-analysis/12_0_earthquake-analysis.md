---
sidebar_position: 1
---
# Földrengés analízis

<!-- wp:paragraph {"align":"justify"} -->

A Consteel, a földrengés analízist **Modális válaszspektrum-analízis** (_Modal response spectrum analysis_, MRSA) eljárás alapon végzi el, az alábbi három analízismód támogatásával:

<!-- /wp:paragraph -->

<!-- wp:list -->

- Minden modális alak, CQC összegzéssel: Minden dinamikai alakra elvégzi a Consteel a modális terhek előállítását irányonként és elsőrendű analízis segítségével kiszámítja a dinamikai alakokhoz és irányokhoz tartozó analízis eredményeket (elmozdulás, igénybevételek stb.), majd az egyes alakok eredményeit CQC módszerrel összegzi. A CQC összegzés statisztikai módon adja meg a szerkezet összes pontjában a várható legnagyobb elmozdulást, igénybevételt stb. A CQC módszer eredményei előjel nélküli burkoló elmozdulási, igénybevételi stb. ábrák

<!-- /wp:list -->

<!-- wp:list -->

- Egy domináns modális alak: a kiszámított dinamikai alakok közül a Consteel automatikusan kiválasztja minden irányhoz a domináns rezgés alakot és arra az irányonkénti egy alakra végzi el a számítást. A módszer eredménye minden irányhoz tartozó modális teher.

<!-- /wp:list -->

<!-- wp:list -->

- Kiválasztott modális alakok, lineáris összegzéssel: A felhasználó által irányonként kiválasztott modális alakok és a megadott kombinációs tényezők segítségével, a Consteel a rezgés alakok lineáris kombinációját állítja elő és erre az irányonkénti kombinált alakra végzi el a számítást. A módszer eredménye minden irányhoz tartozó modális teher.

<!-- /wp:list -->

<!-- wp:paragraph -->

A három módszer összehasonlítása:

<!-- /wp:paragraph -->

<!-- wp:table {"className":"is-style-stripes"} -->

|                                                     | **Minden modális alak, CQC összegzéssel**                       | **Egy domináns modális alak**                                                                              | **Kiválasztott modális alakok, lineáris összegzéssel** |
| --------------------------------------------------- | --------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| **Dinamikai számítás**                              | Szükséges                                                       | Szükséges                                                                                                  | Szükséges                                              |
| **Másodrendű analízis**                             | Nem lehetséges                                                  | Igen                                                                                                       | Igen                                                   |
| **Stabilitás számítás**                             | Nem lehetséges                                                  | Igen                                                                                                       | Igen                                                   |
| **Globális vizsgálatok – keresztmetszet vizsgálat** | Igen                                                            | Igen                                                                                                       | Igen                                                   |
| **Globális vizsgálatok – stabilitás vizsgálat**     | Nem lehetséges                                                  | Igen                                                                                                       | Igen                                                   |
| **Elemtervező**                                     | Nem lehetséges                                                  | Igen                                                                                                       | Igen                                                   |
| **Figyelembe vett tömegek**                         | Minden irányba a meghatározott rezgés alakokhoz tartozó tömegek | Minden irányba a megadott tömegek 100%-a   | Minden irányba a kiválasztott rezgés alakokhoz tartozó, a megadott kombinációs tényezővel szorzott tömegek             |
| **Automatikus funkció**                             | Igen                                                            | Igen                                                                                     | Kézi megadás szükséges                                                |
| **Másodrendű érzékenység ellenőrzés**               | Igen                                                            | Igen                                                                                                       | Igen                                                   |

<!-- /wp:table -->

<!-- wp:paragraph -->

A Modális válaszspektrum-analízis eredményeit a Consteel a 100% „+” 30%-os szabállyal kombinálja hozzá szeizmikus határállapotban is működő egyéb hatásokhoz.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->
Let E = 10 be the earthquake intensity.

a) $E_{E.dx}\quad "+"\quad 0,30 E_{E.dy}\quad "+" \quad 0,30 E_{E.dz}$

b) $0,30E_{E.dx}\quad "+"\quad E_{E.dy}\quad "+" \quad 0,30 E_{E.dz}$

c) $0,30E_{E.dx}\quad "+"\quad 0,30 E_{E.dy}\quad "+" \quad E_{E.dz}$


<!-- /wp:paragraph -->
