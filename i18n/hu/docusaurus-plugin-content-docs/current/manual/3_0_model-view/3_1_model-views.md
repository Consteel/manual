---
sidebar_position: 1
---
# Modell nézetek

A modell helyességének elsődleges ellenőrzési eszköze a grafikus felület. Az ellenőrzéshez elengedhetetlenek az átlátható és széleskörűen felhasználható modell nézetek. A grafikus ellenőrzéssel egyszerűen eldönthetjük, hogy a megfelelő objektum került-e a megfelelő helyre. 

<!-- wp:image {"align":"left","id":7682,"width":182,"height":209,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://www.consteelsoftware.com/wp-content/uploads/2021/04/4-2-model-view-side-bar.png)](./img/wp-content-uploads-2021-04-4-2-model-view-side-bar.png)



A nézet beállítás funkciói a baloldali sávon találhatóak. A szokásos modellnézeteken (felülnézet, elölnézet, oldalnézet, izometrikus nézet) túl, négy megjelenítési lehetőség használható az objektumok megjelenítésére:


- **Szerkesztő nézet** ![](./img/wp-content-uploads-2021-04-4-2-model-view-line-view-icon.png): a legegyszerűbb modellnézet, ahol a rudakat egyenesek (vagy ívek), a lemezeket vastagság nélküli síkidomok, a támaszokat tengelyeik reprezentálják. _Használata a modellépítés során ajánlott, mert a megjelenő fogópontok ebben a nézetben láthatóak a legtisztábban, elősegítve az elemek pontos elhelyezését._

[![](https://www.consteelsoftware.com/wp-content/uploads/2021/04/4-2-model-view-lv1.jpg)](./img/wp-content-uploads-2021-04-4-2-model-view-lv1.jpg)



[![](https://www.consteelsoftware.com/wp-content/uploads/2021/04/4-2-model-view-lv-2.png)](./img/wp-content-uploads-2021-04-4-2-model-view-lv-2.png)


- **Drótvázas nézet** ![](./img/wp-content-uploads-2021-04-4-2-model-view-wireframe-icon.png): megjelennek a szelvények alakjai és a lemezek vastagságai, támaszokat továbbra is tengelyeik reprezentálják.

[![](https://www.consteelsoftware.com/wp-content/uploads/2021/04/4-2-model-view-wf1.jpg)](./img/wp-content-uploads-2021-04-4-2-model-view-wf1.jpg)


[![](https://www.consteelsoftware.com/wp-content/uploads/2021/04/4-2-model-view-wf2.jpg)](./img/wp-content-uploads-2021-04-4-2-model-view-wf2.jpg)


- **Takartvonalas nézet** ![](./img/wp-content-uploads-2021-04-4-2-model-view-hidden-icon.png): a keresztmetszetek és a lemezek tükröződések nélküli, testnézettel jelennek meg. A támaszok is testnézetben jelennek meg.


[![](https://www.consteelsoftware.com/wp-content/uploads/2021/04/4-2-model-view-hl1.jpg)](./img/wp-content-uploads-2021-04-4-2-model-view-hl1.jpg)


[![](https://www.consteelsoftware.com/wp-content/uploads/2021/04/4-2-model-view-hl2.jpg)](./img/wp-content-uploads-2021-04-4-2-model-view-hl2.jpg)


- **Test nézet** ![](./img/wp-content-uploads-2021-04-4-2-model-view-solid-icon.png): a keresztmetszetek és a lemezek tükröződéssel és csillogással kiegészített testnézettel jelennek meg. A támaszok is testnézetben jelennek meg.


[![](https://www.consteelsoftware.com/wp-content/uploads/2021/04/4-2-model-view-sv1.jpg)](./img/wp-content-uploads-2021-04-4-2-model-view-sv1.jpg)

[![](https://www.consteelsoftware.com/wp-content/uploads/2021/04/4-2-model-view-sv2.jpg)](./img/wp-content-uploads-2021-04-4-2-model-view-sv2.jpg)


Ahogy a modellépítés során az egyre összetettebbé válik, a részletkezelő segítségével megoldható, hogy csak a modell egy kiválasztott részlete legyen látható. Ehhez válasszuk ki a modell kívánt elemeit, majd kattintsunk a _**Részlet kezelő**_ ablakban a _**Részlet modell nézet**_ ikonra.


[![](https://www.consteelsoftware.com/wp-content/uploads/2021/04/4-2-model-view-submodel-select.jpg)](./img/wp-content-uploads-2021-04-4-2-model-view-submodel-select.jpg)


[![](https://www.consteelsoftware.com/wp-content/uploads/2022/02/reszlet_kezelo.png)](./img/wp-content-uploads-2022-02-reszlet_kezelo.png)


A parancs hatására a kiválasztott elemeken kívül minden más rejtetté válik:


[![](https://www.consteelsoftware.com/wp-content/uploads/2021/04/4-2-model-view-submodel-1.png)](./img/wp-content-uploads-2021-04-4-2-model-view-submodel-1.png)


Ha az _**Elrejtett részek megjelenítése áttetszően**_ jelölőnégyzetet bekapcsoljuk, a rejtett elemek halvány szürke színnel láthatóvá válnak.

[![](https://www.consteelsoftware.com/wp-content/uploads/2021/04/4-2-model-view-submodel-2.jpg)](./img/wp-content-uploads-2021-04-4-2-model-view-submodel-2.jpg)

**Consteel 17**-től elérhető a **Elrejtés** funkció (Alt+H). Válassza ki azokat az elemeket, amelyeket el szeretne rejteni, majd aktiválja a elrejtés ikont vagy használd az Alt+H billentyűkombinációt a végrehajtáshoz.

![](./img/wp-content-uploads-2024-02-3.1.Hide-CS17-HU.png)

A teljes modell újbóli láthatóvá tételéhez kattintsunk a **_Részlet kezelő_** ablakában a _**Teljes modell**_ nézet parancsra:

[![](https://www.consteelsoftware.com/wp-content/uploads/2022/02/reszlet_kezelo_teljes_modell.png)](./img/wp-content-uploads-2022-02-reszlet_kezelo_teljes_modell.png)



További információt ld. a **_[Részlet kezelő](../3_0_model-view/3_3_portions-manager.md)_** fejezetben!