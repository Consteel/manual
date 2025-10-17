---
sidebar_position: 6
---
# Adatfeldolgozó

Az adatfeldolgozó egy szekvenciális kliens, amely a széláramlás szimulálásához szükséges specifikus OpenFOAM alkalmazásokat használ az épületek körüli széláramlás szimulációjához, és az alábbi szakaszokat tartalmazza:

1. **Felületi élek kinyerése** – Az eredeti geometria alakjának megőrzése érdekében szükséges az összes él kinyerése.

2. **Tömbháló generálás** – A szélcsatorna információi alapján a számítási tartományt diszkrét finomított térfogatokra vagy kocka / hexaéder blokkra bontják.

3. **A számítási tartomány dekompozíciója** – A finomított térfogat-háló generálásának és a szimuláció párhuzamos magokon történő végrehajtásához szükséges.

4. **Háló generálás** – Az épület hálója beillesztésre kerül a szélcsatorna tartományába a finomítással.

5. **A szimuláció végrehajtása**

![alt text](<img/file system.png>)  

_Fájlrendszer hierarchia kibővítése_
