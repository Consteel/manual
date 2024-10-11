---
slug: Version 17 Hotfix 1
title: Version 17 Hotfix 1

tags: [consteel, update]
---
**20-12-2023 	build 3201**

**_Bug fixes:_**

-Analysis result visualization according to Auto Portions fixed

-Submodel view fixed

-Fix of X,Y,Z hotkeys

-Problem with visualization of start and end point of members has been fixed. 

-Flange slenderness calculation is corrected in Consteel Joint module.

-Interface to IDEA Statica 22.1.6.0493, 23.0.5.1260, 23.1.1.1138 improved, signs of transferred internal forces fixed.

-In some cases, there were problems with opening files created in earlier versions of Consteel. The bug has been fixed. 

-Point support was not possible to place on plate elements. The bug has been fixed. 

-Calculation of cross section class for tube sections in Member Check has been fixed.

-Palette for deformation results was not working properly. The bug has been fixed.

-Result display in case of critical temperature calculation has been fixed.

-Descript codes did not run when starting from local computer. The bug has been fixed.

-Clicking on the Full view button resulted deselection of already selected members. The bug has been fixed.

-Folder creation was not possible at cloud save. The bug has been fixed. 

-Design crashed when members were added to or deleted from the model and there was no update in FE model. The bug has been fixed.

-There is a limit of stress value under which the stability design is not performed. The limit value has been changed because it caused the stability design to skip unnecessarily in case of fire design when the stress was low but also the yield strength was decreased due to the high steel temperature.  
