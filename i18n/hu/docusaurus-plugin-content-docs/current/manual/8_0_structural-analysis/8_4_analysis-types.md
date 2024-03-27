---
sidebar_position: 4
---
# Analízis típusok
<!-- wp:heading {"level":3} -->

### Rugalmas analízis

<!-- /wp:heading -->

<!-- wp:heading {"level":4} -->

#### Elsőrendű analízis

<!-- /wp:heading -->

<!-- wp:paragraph -->

Az elsőrendű analízis a szerkezete kezdeti merevsége alapján számítja ki a szerkezet alakváltozásait, igénybevételeit. A modell elkészülte után ajánlatos először elsőrendű analízist futtatni és ez alapján leellenőrizni a szerkezet viselkedését, mielőtt időigényesebb számítást futtatnánk (például sajátérték számítás). Az elsőrendű számítás végrehajtásának lépései a következők:

<!-- /wp:paragraph -->

<!-- wp:list {"ordered":true,"type":"1"} -->

1. A végeselem elsőrendű (kezdeti) merevségi mátrixának számítása lokális koordináta rendszerben
2. A teljes szerkezet globális merevségi mátrixának ($K_s$) és erővektorának ($P$) előállítása, az elem merevségi mátrixok globális koordináta rendszerbe történő transzformálásával
3. A globális merevségi mátrix és az erővektor módosítása a peremfeltételek figyelembevételével (támaszok, rúdvégi folytonosság, előírt elmozdulás, hőmérsékletteher stb.)
4. Az alkalmazott csomóponti erők – a terhekből előállított ismert változó – és a csomóponti elmozdulások – ismeretlen változó ($U$) – közötti kapcsolatot leíró lineáris egyenletrendszer megoldása a szerkezet globális koordináta rendszerében a globális modellre (a csomóponti elmozdulások és erők értelmezését lásd. **_[8.1 Végeselemek](/manual/szerkezetek-analizise/vegeselemek/)_** fejezetben):

<!-- /wp:list -->

<!-- wp:columns -->

<!-- wp:column {"width":"50%","editorskit":{"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false},"editorskit_typography":{"name":"","family":"","weight":""},"extUtilities":[]} -->

<!-- wp:paragraph {"editorskit":{"indent":40,"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

![alt text](image.png)

<!-- /wp:paragraph -->

<!-- /wp:column -->

<!-- wp:column {"width":"50%","editorskit":{"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false},"editorskit_typography":{"name":"","family":"","weight":""},"extUtilities":[]} -->

<!-- wp:paragraph {"align":"right"} -->

(1)

<!-- /wp:paragraph -->

<!-- /wp:column -->

<!-- /wp:columns -->

<!-- wp:list {"ordered":true,"start":5,"className":"is-style-default"} -->

5. Az elemek igénybevételeinek (és feszültségeinek) ($f^{el}$) számítása a lokális koordináta rendszerekben, az elemek globális csomóponti elmozdulásainak lokális merevségi mátrixszal lokális koordináta rendszerekbe ($u^{el}$) való transzformálásával:

<!-- /wp:list -->

<!-- wp:columns -->

<!-- wp:column {"width":"50%","editorskit":{"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false},"editorskit_typography":{"name":"","family":"","weight":""},"extUtilities":[]} -->

<!-- wp:paragraph {"editorskit":{"indent":40,"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

$f^{el}=K_s^{el}u^{el}$

<!-- /wp:paragraph -->

<!-- /wp:column -->

<!-- wp:column {"width":"50%","editorskit":{"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false},"editorskit_typography":{"name":"","family":"","weight":""},"extUtilities":[]} -->

<!-- wp:paragraph {"align":"right"} -->

(2)

<!-- /wp:paragraph -->

<!-- /wp:column -->

<!-- /wp:columns -->

<!-- wp:heading {"level":4} -->

#### Másodrendű számítás

<!-- /wp:heading -->

<!-- wp:paragraph -->

A másodrendű számítás figyelembe veszi, hogy a terhelt és deformált szerkezet a terhelés hatására eltérően viselkedik, mint az elsőrendű számításnál. Ez a hatás a kezdeti merevség terhelés hatására létrejövő változásaként vehető figyelembe. A másodrendű számítás lépései:

<!-- /wp:paragraph -->

<!-- wp:list {"ordered":true,"type":"1"} -->

1. Az elsőrendű számítás fentiekben leírtak szerinti végrehajtása
2. A végeselemek geometriai merevségi mátrixának ($K_g^{el}$) saját koordinátarendszerben történő meghatározása az egyes elemek igénybevételeinek ($f^{el}$) figyelembevételével
3. A másodrendű globális merevségi mátrix ($K_s+K_g$) és a teljes modell erővektorának ($P$) előállítása, az elem merevségi mátrixok globális koordináta rendszerbe történő transzformálásával
4. A globális másodrendű merevségi mátrix és az erővektor módosítása a peremfeltételek figyelembevételével (támaszok, rúdvégi folytonosság, előírt elmozdulás, hőmérsékletteher stb.)
5. Az alkalmazott csomóponti erők – a terhekből előállított ismert változó – és a csomóponti elmozdulások – ismeretlen változó ($U$) – közötti kapcsolatot leíró lineáris egyenletrendszer megoldása a szerkezet globális koordináta rendszerében a terhelt és deformált globális modellre (a csomóponti elmozdulások és erők értelmezését lásd. **_[8.1 Végeselemek](/manual/szerkezetek-analizise/vegeselemek/)_** fejezetben):

<!-- /wp:list -->

<!-- wp:columns -->

<!-- wp:column {"width":"50%","editorskit":{"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false},"editorskit_typography":{"name":"","family":"","weight":""},"extUtilities":[]} -->

<!-- wp:paragraph {"editorskit":{"indent":40,"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

$(K_s+K_g)U=P \rightarrow U=(K_s+K_g)^{-1}P$

<!-- /wp:paragraph -->

<!-- /wp:column -->

<!-- wp:column {"width":"50%","editorskit":{"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false},"editorskit_typography":{"name":"","family":"","weight":""},"extUtilities":[]} -->

<!-- wp:paragraph {"align":"right"} -->

(3)

<!-- /wp:paragraph -->

<!-- /wp:column -->

<!-- /wp:columns -->

<!-- wp:list {"ordered":true,"start":6} -->

6. Az elemek igénybevételeinek (és feszültségeinek) ($f^{el}$) számítása a lokális koordináta rendszerekben, az elemek globális csomóponti elmozdulásainak lokális merevségi mátrixszal lokális koordináta rendszerekbe ($u^{el}$) való transzformálásával:  
   $f^{el}=K_s^{el}u^{el}$
7. Ha egy csomóponti korábbi helyzethez viszonyított elmozdulása egy határértéket túllép, akkor a számítás a második lépéstől ismétlődik.

<!-- /wp:list -->

<!-- wp:heading {"level":4} -->

#### Statikai sajátérték – kihajlás analízis

<!-- /wp:heading -->

<!-- wp:paragraph -->

A sajátértékszámítás mechanikai értelmezése egy olyan rugalmas kritikus terhelési szint, amelynél a szerkezet valamilyen módon elveszíti a stabilitását. Matematikailag ez azt jelenti, hogy a másodfokú egyenletnek (3) nincs megoldása, mert a másodrendű merevségi mátrix szinguláris. A _Consteel_ programban a lineáris sajátérték számítás egy paramétert vesz figyelembe, a konzervatív terhelés és a geometriai merevségi mátrix a teherfaktortól (λ) lineárisan függ:

<!-- /wp:paragraph -->

<!-- wp:columns -->

<!-- wp:column {"width":"50%","editorskit":{"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false},"editorskit_typography":{"name":"","family":"","weight":""},"extUtilities":[]} -->

<!-- wp:paragraph {"editorskit":{"indent":40,"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

$K_g(\lambda f)=\lambda K_g(f)$

<!-- /wp:paragraph -->

<!-- /wp:column -->

<!-- wp:column {"width":"50%","editorskit":{"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false},"editorskit_typography":{"name":"","family":"","weight":""},"extUtilities":[]} -->

<!-- wp:paragraph {"align":"right"} -->

(4)

<!-- /wp:paragraph -->

<!-- /wp:column -->

<!-- /wp:columns -->

<!-- wp:paragraph -->

Ebben az esetben a sajátérték számítás az alábbi formában írható fel:

<!-- /wp:paragraph -->

<!-- wp:columns -->

<!-- wp:column {"width":"50%","editorskit":{"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false},"editorskit_typography":{"name":"","family":"","weight":""},"extUtilities":[]} -->

<!-- wp:paragraph {"editorskit":{"indent":40,"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

$(K_s+\lambda K_g)U=0$

<!-- /wp:paragraph -->

<!-- /wp:column -->

<!-- wp:column {"width":"50%","editorskit":{"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false},"editorskit_typography":{"name":"","family":"","weight":""},"extUtilities":[]} -->

<!-- wp:paragraph {"align":"right"} -->

(5)

<!-- /wp:paragraph -->

<!-- /wp:column -->

<!-- /wp:columns -->

<!-- wp:paragraph -->

Az egyenletnek a megoldásai a kritikus teherfaktorok (kihajlási teher faktor $\lambda \_{cr}^i$) amelyek a másodrendű merevségi mátrixokat szingulárissá teszik és az elmozdulások (kihajlási alakok $U^i$).

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

A sajátérték analízis elvégzésével kapott lehetséges kihajlási alakokat alapvetően befolyásolja a figyelembe vett másodrendű hatás, amit az alkalmazott végeselem típus határoz meg. Például 7 SZF oszlop-gerenda végeselem esetén figyelembe vehető az összes globális kihajlási alak: kihajlás, elcsavarodó kihajlás, kifordulás és ezek interakciója.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Kihajlási érzékenységi vizsgálat

<!-- /wp:heading -->

<!-- wp:paragraph -->

Ezen funkció segítségével összefoglaló képet kapunk a szerkezet kihajlási alakjairól, illetve rudanként megadja, hogy az adott rúd stabilitás vizsgálatához melyik teherkombináció melyik kihajlási alakja a legrelevánsabb, azaz melyiket érdemes alkalmazni. A későbbi globális méretezés (ld. **_[9.2.1 Globális vizsgálatok](/manual/szabvanyos-tervezes/acelszerkezet-tervezes/#Global-checks)_**) során ez alapján a program automatikusan ki tudja választani a megfelelő kritikus teherfaktort.

<!-- /wp:paragraph -->

<!-- wp:image {"align":"center","id":36820,"sizeSlug":"full","linkDestination":"media","className":"is-style-editorskit-rounded"} -->

[![](https://consteelsoftware.com/wp-content/uploads/2022/06/scr_anal_kihajlas.png)](./img/wp-content-uploads-2022-06-scr_anal_kihajlas.png)

<!-- /wp:image -->

<!-- wp:heading {"level":4} -->

#### Imperfekciós érzékenységi vizsgálat

<!-- /wp:heading -->

<!-- wp:paragraph -->

Az imperfekciós érzékenységi vizsgálat segítségével minden stabilitásvesztési alakhoz meghatározható a kritikus rúdelem és kritikus pont (ekvivalens pont), ami alapján az imperfekciós alak amplitúdója számolható. A grafikus ábrán a stabilitásvesztési alakot imperfekciós elmozdulás-teherként alkalmazva kapott igénybevételekből, feszültség alapon számított kihasználtságok láthatók minden, ahol a legnagyobb kihasználtsághoz tartozó keresztmetszet kapja a 100% értéket. ld. még a **_[6.4.3.2 fejezetet](/manual/terhek/globalis-imperfekciok/#Automatic-amplitude-calculation)_**.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Dinamikai sajátérték – rezgésanalízis

<!-- /wp:heading -->

<!-- wp:paragraph -->

A dinamikus sajátérték számítás mechanikai értelmezése a szerkezet sajátfrekvenciáinak meghatározása. A lineáris sajátérték analízis elvégzése során a _Consteel_ a másodrendű merevségi mátrixot és a konzisztens tömeg mátrixot (**M**) veszi figyelembe.

<!-- /wp:paragraph -->

<!-- wp:columns -->

<!-- wp:column {"width":"50%","editorskit":{"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false},"editorskit_typography":{"name":"","family":"","weight":""},"extUtilities":[]} -->

<!-- wp:paragraph {"editorskit":{"indent":40,"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

$((K_s+K_g)+\omega^{2}M)U=0$

<!-- /wp:paragraph -->

<!-- /wp:column -->

<!-- wp:column {"width":"50%","editorskit":{"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false},"editorskit_typography":{"name":"","family":"","weight":""},"extUtilities":[]} -->

<!-- wp:paragraph {"align":"right"} -->

(6)

<!-- /wp:paragraph -->

<!-- /wp:column -->

<!-- /wp:columns -->

<!-- wp:paragraph -->

Az egyenletnek a megoldásai a sajátfrekvenciák (_$\\omega^i$_) és az elmozdulások (szabad rezgési alakok $U^i$).

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

A sajátérték analízis elvégzésével kapott lehetséges rezgési alakokat alapvetően befolyásolja a figyelembe vett merevség és tömeg mátrix, amit az alkalmazott végeselem típus határoz meg. Például 7 SZF oszlop-gerenda végeselem esetén figyelembe vehető az összes globális rezgési alak: kihajlás, elcsavarodó kihajlás, kifordulás és ezek interakciója.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Képlékeny analízis

<!-- /wp:heading -->

<!-- wp:paragraph -->

Képlékeny analízis indítására az **Analízis** fül **Analízis beállításai** ablakon van lehetőség. Ehhez a **Számítás típusa** legördülő menü, **Képlékeny** opció kiválasztására van szükség.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Alapok

<!-- /wp:heading -->

<!-- wp:image {"align":"right","id":39539,"width":400,"height":397,"sizeSlug":"full","linkDestination":"media","className":"is-style-editorskit-rounded"} -->

[![](https://consteelsoftware.com/wp-content/uploads/2022/06/dial_analizis_beallitasok_keplekeny-e1656515363348.png)](./img/wp-content-uploads-2022-06-dial_analizis_beallitasok_keplekeny-e1656515363348.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

Képlékeny analízis választása esetén, képlékeny csukló analízis fut le, amely figyelembe veszi a kizárólag erőstengely körül nyomaték (My) hatására, a keresztmetszet _y_ lokális tengelye kerül kialakuló síkbeli képlékeny csuklókat – más hatásnak (nyírás, normálerő vagy gyengetengely körüli hajlítás) nincs hatása a csuklók kialakulására. Az analízis beállításai elérhetők az **_[Analízis beállításai](/manual/szerkezetek-analizise/analizis-beallitasok/)_** dialógon, a _Számítás típusa_ legördítő menü mellett található három pontos (![](./img/wp-content-uploads-2021-04-3dots-button.png)) ikonra kattintva.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Az első csoportban a képlékeny csuklók kialakulásának feltételei állíthatók be. A legördülő menü segítségével kiválasztható részmodell is. Ebben az esetben az analízis a képlékeny csuklókat csak a kiválasztott részmodellben fogja keresni. Keresztmetszetek tekintetében két opció érhető el, ahol a képlékeny csuklók kialakulhatnak: keresztmetszetek minimum egyszeresen szimmetrikusak (a lokális z tengely körül) és kompakt (AISC szabvány esetén) vagy első osztályú (EuroCode szabvány esetén). A szokásos szabványos előírásoknak megfelelően ennek a két feltételnek szükséges teljesülnie képlékeny analízis végrehajtásához. A képlékeny csukló analízis pontossága is megadható a képlékeny nyomatéki ellenállás százalékában (Mpl).

<!-- /wp:paragraph -->

<!-- wp:image {"align":"right","id":39547,"width":400,"height":397,"sizeSlug":"full","linkDestination":"media","className":"is-style-editorskit-rounded"} -->

[![](https://consteelsoftware.com/wp-content/uploads/2022/06/dial_analizis_beallitasok_keplekeny_aloldal-e1656515332804.png)](./img/wp-content-uploads-2022-06-dial_analizis_beallitasok_keplekeny_aloldal-e1656515332804.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

A második csoportban a képlékeny csuklók kialakulása utáni mechanikai viselkedése állítható be. Mivel a síkbeli (síkbeli kifejezés csak a csukló kialakulására vonatkozik) csuklók részei egy térbeli modellnek, ezért meg kell határozni a kialakulás utáni térbeli mechanikai viselkedésüket (térbeli csukló). Ennek megfelelően a kialakult csuklók el tudnak fordulni az erős tengely körül, illetve a gyenge tengely körül a szabad öblösödési deformációval együtt. A két utóbbi opció segítségével realisztikusan figyelembe vehető, hogy a képlékeny csuklók okozta teljes övmegfolyások egy I szelvény esetén gyakorlatilag kistengely körüli és öblösödési csukló viselkedést tesznek lehetővé. Ezek az opciók befolyásolják a síkra merőleges viselkedését a modellnek (például abban az esetben, ha egy szerkezeti elem kihajlása a képlékeny csukló mellett alakul ki a csukló síkjára merőlegesen).

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

A harmadik csoportban található beállítási lehetőségek segítségével különböző figyelmeztetéseket megjelenítésére van lehetőség az analízis során. A figyelmeztetések abban az estben jelennek meg, ha a képlékeny csuklók kialakulására jelentős hatással bír a nagytengely körüli hajlításon kívül más igénybevétel is.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

A negyedik csoportban adható meg, hogy mely analízis eredmények kerüljenek elmentésre és megjelenítésre minden egyes státuszban. Nagy modell és jelentősszámú képlékeny csukló esetén az eredmény mérete jelentős lehet, ezért tanácsos csak azokat az eredmény típusokat kiválasztani, amelyekre ténylegesen szükség van.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Elsőrendű analízis

<!-- /wp:heading -->

<!-- wp:paragraph -->

Matematikailag a rugalmas számításnál leírtakhoz hasonlóan történik, de azzal a nagy különbséggel, hogy nem csak a megadott terhelésre végez analízist, hanem a megadott terhelést lépésenként addig változtatja (növeli vagy csökkenti), amíg a szerkezet instabillá nem válik a kialakuló képlékeny csuklók miatt.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

A megoldás folyamata a következő:

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

1: A felhasználó által megadott teherkombinációnak megfelelően lefut egy elsőrendű rugalmas analízis, majd a kapott erős tengely körüli My hajlítónyomaték értékek az első csoportban szereplő szempontok szerint összehasonlításra kerülnek a végeselemhez rendelt szelvény képlékeny nyomatéki ellenállásával.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

2a: Amennyiben a képlékeny analízisre kijelölt elemek egyetlen pontjában sem érik el a felhasználó által megadott teherszinten számolt igénybevételek a képlékeny csukló(k) kialakulásának feltételeit, a Consteel a teherszintet lépésekben emeli mindaddig, amíg az első képlékeny csukló ki nem alakul.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

2b: Amennyiben a felhasználó által megadott teherszinten van olyan pont, ahol a képlékeny csukló kialakulna, a Consteel a teherszintet lépésekben csökkenti addig a teherszintnek a megtalálásáig, amikor az első képlékeny csukló kialakulna.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

3: A megtalált $(\alpha *MyEd)$ teherszinten az aktuális összes olyan végeselempontra, ahol a képlékeny csukló kialakulásának a feltételei adottak, a Consteel csuklót helyez el a „Képlékeny csuklók viselkedése” paramétereknek megfelelően, amely a további teherlépcsőkre elvégzett analízisnél kerül alkalmazásra. Az csuklók elhelyezése miatt a szerkezet globális merevségi mátrixa aktualizálásra kerül és egy újabb számítási szint indul. Az elhelyezett csuklók grafikusan ábrázolásra kerülnek majd következő számítási lépés indul.

<!-- /wp:paragraph -->

<!-- wp:image {"align":"center","id":10750,"sizeSlug":"large","linkDestination":"media"} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/04/8-5-2-2-FIRST-ORDER.png)](./img/wp-content-uploads-2021-04-8-5-2-2-FIRST-ORDER.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

4: A Consteel tovább növeli a terhelést az α teherszorzón keresztül, a megváltoztatott merevségi mátrix használatával mindaddig, amíg a következő képlékeny csukló kialakulásának a teherszintjét el nem éri.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

5: A 3. ponthoz hasonlóan elhelyez csuklókat az újonnan megtalált csomópontokra, aktualizálja a merevségi mátrixot és folytatja az iterációt a 4. pont szerint.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

A képlékeny analízis akkor ér véget, amikor a kialakuló képlékeny csuklók eredményeképpen a szerkezet instabillá változik. Amennyiben az így kapott végső teherszorzó értéke 1.00 alatti, a szerkezet instabil és az elsőrendű számítás eredmény nélkül záródik. Erre üzenet figyelmezteti a felhasználót.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Az iteráció során, amikor a program eléri az 1.00 teherszorzó értéket, az aktuális igénybevétel értékek elmentődnek, mert a teherbírás vizsgálatokat ezen a szinten – azaz a megadott terhelések szintjén – kell elvégezni. Ezek az igénybevételek lesznek az alapjai a további lépésben elvégzendő sajátérték-kihajlás analízisnek.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Az egyes teherszint-növelési lépések, a hozzá tartozó teherszorzók és a lépés során kialakult képlékeny csuklók története végig nézhető az analízis típusok legördülő menüben megjelenő „Képlékeny csuklók” opció választásával.

<!-- /wp:paragraph -->

<!-- wp:image {"align":"center","id":39559,"width":286,"height":122,"sizeSlug":"full","linkDestination":"media","className":"is-style-editorskit-rounded"} -->

[![](https://consteelsoftware.com/wp-content/uploads/2022/06/scr_anal_keplekenycsuklok.png)](./img/wp-content-uploads-2022-06-scr_anal_keplekenycsuklok.png)

<!-- /wp:image -->

<!-- wp:heading {"level":4} -->

#### Másodrendű analízis

<!-- /wp:heading -->

<!-- wp:paragraph -->

Hamarosan!

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Statikai sajátérték – kihajlás analízis

<!-- /wp:heading -->

<!-- wp:paragraph -->

Az elsőrendű analízisnél leírt iterációt végzi a program az 1,00 teherszorzó értékig, ami a megadott teherszintnek felel meg. Az ezen a teherszinten érvényes statikai váznak megfelelő elsőrendű Ks és az ehhez tartozó igénybevételeloszláshoz számolt Kg mátrixok használatával a rugalmas számításnál leírtak szerint történik a számítás.

<!-- /wp:paragraph -->
