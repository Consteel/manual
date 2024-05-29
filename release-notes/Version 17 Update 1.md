---
slug: Version 17 Update 1
title: Version 17 Update 1

tags: [consteel, update, hotfix]
---

**23-02-2023 	build 3303**

**_Bug fixes:_**

-Extreme values by members page in the design results table was not always correct. The bug has been fixed. 

-In some cases, the memory area claimed by the Consteel for the analysis, was not enough. The bug has been fixed.

-In Section module, there was no utilization shown for plastic interaction resistance. The bug has been fixed.

-Crash fixed on Section module, GSS model, Local coordinates button.

-Crash fixed on Section module, Stresses in case of Sigma sections.

-Adjustments on Dutch NA (Eq 6.10. not available anymore, combination factor for category C variable load ψ=0,5, only Ce=1 topography factor for snow is available)

-Calculation of web buckling parameters for sections with two webs (omega) has been fixed.

-Crash on visualization of seismic analysis results has been fixed. 

-There was an error message appearing when pushing the Rules button on Load combination set definition dialog. The bug has been fixed.

-Mass was not possible to be created from crane loads. The bug has been fixed.

-FE type for RC members after import has been set to 6DOF. 

-Crash caused by Chinese characters in the path of install folder has been fixed. 

-Problems of handling user NA’s fixed.

-Concentrated mass definition was not possible in Line view. The bug has been fixed.

-Handling of different decimal separators for user defined response spectrum has been fixed. 

-RC second order results visualization has been fixed in Hidden Line and Solid view. 

-Adjustment on force distribution between bolt-rows in Consteel Joint

-Corrections on Reinforcement DXF export

-RC beam design is possible without design parameter

-Consideration of the effective width for composite beams in the calculations is harmonized.

-Infinite stresses in Section module documentation have been fixed.

Changes:
-Dlubal and SAP2000 import possibilities were removed. The import will be possible to initiate with Descript codes, to be released soon.

**_Improvements:_**

-X Brace handling in Descript (GET, SET, CREATE, Select by Attribute)

-Source of section has been added to the Documentation.

-LOAD_SECTION_LIBRARY is completed with Section Bank as an optional parameter

-Progress bar added for model open

-Diagnostic warning is added in case of an eccentric support, that it is not capable of considering warping fixity.
