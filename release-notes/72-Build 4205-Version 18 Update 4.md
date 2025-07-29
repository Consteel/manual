---
slug: 72-Build 4209-Version 18 Update 4
title: Build 4209-Version 18 Update 4

tags: [consteel, update]
---

**04-07-2025 	build 4209**


_**Bug fixes:**_

- IDEA StatiCa Checkbot export failed when results from SLS load combination were present in the model. The bug has been fixed. 
- Internal forces calculation in case thermal load and bow imperfection is considered, has been fixed. 
- Analysis results were different in case of XBrace elements if first order calculation was not requested but only second order and/buckling. The bug has been fixed. First order calculation is now always executed if necessary for the upcoming calculation.
- Analysis results presented false errors in some cases after multiple runs due to a technical bug. The bug has been fixed.  


_**Modifications:**_

- Small changes on the user interface to align with updated licensing system. 
- Design results are not shown anymore on members with intumescent paint in the accidental load combinations containing the fire effect because they are not relevant. 
- Adjustment on Section result table for Conservative interaction resistance.


_**Improvements:**_

- Compatibility granted with newly released FALCON plugin (FALCON beta versions will not start from this Consteel version). 
- Navigation overview is extended with videos of different presets. 
- Consideration of the effect of hot-dip galvanizing in fire design is implemented. 
