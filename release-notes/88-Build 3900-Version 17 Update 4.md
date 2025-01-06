---
slug: 88-Build 3900-Version 17 Update 4
title: Build 3900-Version 17 Update 4

tags: [consteel, update]
---

**13-12-2024    build 3900**


_**Bug fixes:**_

- Crash when defining the shear reinforcement for RC beam has been fixed. 
- In certain cases, the IFC export crashed. The bug has been fixed. 
- Crash of user defined response spectrum creation has been fixed.
- Crash when deleting default mass case has been fixed. 
- By clicking Calculation button, the required and applied reinforcement area cells were not updated for pad foundation in ConSteel Joint. The bug has been fixed.
- Problem with analysis in case of extreme number of load combinations has been fixed. 
- Bug of seismic load combination generation in case multiple live load cases are present has been fixed.
- Minor fix on distributing torsion (Ted) to Tt and Tw for the design calculations. 

**_Improvements:_**

- When creating a custom model portion e.g. for purlins and there are connecting purlin line objects, the software will ask if you want to add the connecting objects to the model portion automatically or not. 
- The software is now digitally signed, so it won’t be detected as a potential threat at download and installation.
