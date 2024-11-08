---
sidebar_position: 3
---
# Szélterhelési generátor szolgáltatás fejlesztése

A szimulációs módszertanok alkalmazásának korai szakaszaiban világos igény merült fel egy olyan szolgáltatás kifejlesztésére, amely kifejezetten a szerkezetépítő mérnökök számára biztosít megoldást az OpenFOAM CFD eszköztár hatékony és kényelmes használatához.

A fejlesztés előtt szigorú szabály vonatkozott néhány jellemzőre, amelyek figyelembevételével a különböző megközelítések korlátozásait vagy egyszerűsítéseit figyelembe kellett venni:

1. Az inputkezelés, szélprofil meghatározás és eredmények értelmezésének alapvető logikája az Eurocode megközelítésekkel van összhangban, elsősorban a kényelem, de másodsorban azért, mert ez tekinthető a legkonzervatívabb megközelítésnek, amint azt a 3.2. fejezetben bemutattuk.

2. Mivel a fő irányvonal a felületi elemekhez kapcsolódó megoldások kínálata, a fókuszálás olyan épületekre irányul, amelyek zártak vagy „légtömör” szerkezetűek. Ezért belső nyomás nem kerül figyelembevételre.

3. Az épületek kompresszibilitás nélküli és merev testeknek tekinthetők.

4. A turbulencia hatását RANS típusú állandó turbulencia modelleken keresztül veszik figyelembe, a szakirodalom szerint az OpenFOAM által kínált 5 modell került kiválasztásra a megvalósításhoz: k-epsilon, k-omega, k-omega SST, realizálható KE és RNGkEpsilon. Mindegyikük a TKE parciális differenciálegyenleteivel dolgozik, tehát a turbulenciát a turbulens viszkozitás segítségével számolják.

5. A folyadékáramlás irányító egyenleteinek megoldásához a simpleFOAM (SIMPLE = Fél-implicit módszer a nyomás-kapcsolt egyenletekhez) szimulátort alkalmazzák. Ez egy állandó állapotú szimulátor, amely nem tartalmaz parciális időbeli deriváltakat, ezért nem veszi figyelembe a fizikai időt. Ez kvázi-statikus nyomásértékekhez vezet.

Ezen egyszerűsítések lehetőségének biztosítása érdekében több validációra van szükség. A legfontosabb, hogy az Eurocode ajánlásainak megfelelően ellenőrzések történnek annak biztosítására, hogy az adott épület merev testként tekinthető. Ezért, ha a szolgáltatást egy szerkezetanalitikai szoftver hívja meg, amely képes dinamikai tulajdonságok számítására, szabad rezgési analízist végezve előzetes ellenőrzést hajtanak végre a határfrekvencia értékre (1 Hz), és a cd szerkezeti tényezőt is értékelik, hogy megbizonyosodjanak arról, hogy nincs szükség dinamikai feltételezésekre. Ha nem, akkor a szolgáltatás nem kínál post-processzált terhelési értékeket, csak az eredménymezők vizsgálhatók.

A fejlesztés egy funkcionális terv előkészítésével kezdődött, hogy meghatározzák a szolgáltatás fő feladatait és az átfogó működési logikát, így három egymást követő szakasz lett világosan elkülönítve.

### Előfeldolgozási szakasz:

- A releváns bemeneti adatok gyűjtése, értelmezése és strukturálása (épület geometriája / teherhordó elemek, szimulációs beállítások)

- A bemenetek validálása a fent említett korlátozások és a geometriai helyesség figyelembevételével.

- A geometria átalakítása egy specifikus hálós példányra, amely képes kezelni bármilyen típusú hálót a hálófelületek alakjától függetlenül (Ngon háló), azt is képes értelmezni az OpenFOAM, de ami a legfontosabb, tárolni tudja a szimuláció eredményeit.

- A szimulációs eset szerializálásának és létrehozásának biztosítása, amely egy speciális fájlhierarchiát tartalmaz, amelyet az OpenFOAM igényel.

### Adatfeldolgozási szakasz:

- A specifikus alkalmazások szinkron hívása, folyamatos visszajelzést adva az aktuális állapotról:

  - Az számítási tartomány diszkretizálása a végső térfogatú alap háló létrehozásához.

  - Az épület geometria beszúrása és finomítása a tartományba.

  - A szimuláció futtatása.

- A létrehozott végső térfogatú háló olvasása az ahhoz tartozó eredményekkel.

- Az eredmények lekérdezése szükség szerint (specifikus pontok vagy eredménymezők).

### Utófeldolgozási szakasz:

- Az eredmények értelmes módon történő megjelenítése.

- Az eredmények átalakítása specifikus terhelési objektumokká az igények szerint.

Műszaki szempontból a szolgáltatás egy önálló projekt, amely a Microsoft .NET fejlesztési keretrendszerére épül, és C# objektum-orientált programozási nyelven íródott. A keretrendszer használatának több oka is van. Először is, mert kényelmes platformot biztosít különféle alkalmazások, például asztali alkalmazások, felhőszolgáltatások és más típusú alkalmazások fejlesztésére és futtatására. Emellett az AEC iparágban gyakori jelenség, hogy a szoftverszolgáltatók C#-t használnak az alkalmazásprogramozási interfészük (API) fejlesztésére. Ezáltal biztosított a hordozhatóság elve. Továbbá, mivel a fejlesztés a szolgáltatás Grasshopper pluginként való megvalósításából is áll, mint külön projekt, amit a későbbi fejezetekben bemutatunk, ez egyértelmű döntés volt.