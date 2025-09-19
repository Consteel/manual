---
slug: 64-Build 4311-Version 18 Update 5
title: Build 4311-Version 18 Update 5

tags: [consteel, update]
---

**17-09-2025 	build 4311**


_**Bug fixes:**_

- During the IDEA Checkbot export, if the cross section is not recognized, it is exported with its name instead of default IPE200.
- IDEA Checkbot export crashed when dynamic results were present in the model. The bug has been fixed. 
- Error message handling in Consteel Joint has been fixed.
- Adjustments on wind effect data sent to FALCON plugin in case of Romanian and Spanish standard. 

_**Modifications:**_
- Finite element analysis due to distributed loads is now more accurate, therefore a refined mesh is not anymore needed
- Torsion moment diagrams reflect accurately the effect of distributed torsional moments
- Values of surface loads are now displayed not at the corner points of the surface but in the middle for better understanding. 

_**Improvements:**_
- Map for basic wind velocity in Spain has been added.
- Descript commands for RC column and smart link



