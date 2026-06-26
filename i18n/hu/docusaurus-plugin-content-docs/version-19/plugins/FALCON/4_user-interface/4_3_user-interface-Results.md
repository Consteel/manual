---
sidebar_position: 3
---
# Szélteher generálása a szimulációs eredményekből

![alt text](img/image-10.png)

Az utolsó lépésben a FALCON a szimulációs eredmények alapján generálja a terheket, amelyeket a modellben megszokott teherként használhatunk. Az ablak végigvezet a szélterhek generálásának folyamatán:

- **Szélszimuláció végrehajtása**: Ha a szélszimuláció nem lett végrehajtva, használd a három pont ikont, hogy visszatérj az előző lépéshez és futtasd azt.

- **Terhelés Értékelés**: A háló generálása során a véges térfogatú háló további finomításon megy keresztül, biztosítva, hogy minden véges elem háló felületén legalább négy tárolt eredmény legyen. Ez különböző eredményértékelési módszereket tesz lehetővé a terhelés konvergenciájának ellenőrzésére, és szükség esetén konzervativizmus hozzáadására.

- **Külső Nyomáskorlátok beállítása**: Állítsd be a nyomás és szívóerő együtthatóinak felső határértékeit.

- **Szél és Belső Nyomás Irányok beállítása**: Állítsd be a szél- és belső nyomás irányokat a terhelés generálásához, a szimulációs eredmények alapján.

- **Generált teher típus kiválasztása - Egyenletes Felületi Terhek**:

  - **Háló Elemein**: Terhelések generálása közvetlenül a véges elem háló elemein.
  
  - **Zónákban**: Terhelések generálása a meghatározott szélzóna kategóriák számának alapján, ami zónás terheléseket eredményez.

  - **Specifikus Zónákban**: Zónás terhelések alkalmazása a modell meghatározott részein.

- **Teher Generálás Futtatása**: Nyomd meg az ablak alján található "Futtatás" gombot a terhek generálásának elindításához.

Ha a szélteher generálása sikeresen befejeződik, új szélteher esetek jelennek meg a _Teher Esetek és Csoportok_ szekcióban.

![alt text](img/image-11.png)

Minden szélteher eset tartalmazza a szimulációból generált megfelelő szélterheket.
