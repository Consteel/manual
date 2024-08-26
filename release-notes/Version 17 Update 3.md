---
slug: Version 17 Update 3
title: Version 17 Update 3

tags: [consteel, update, hotfix]
---

**12-08-2024 	build 3571**

**_Bug fixes:_**

-Crash when cutting LTS has been fixed. 

-Crash when deleting RC beam reinforcement has been fixed

-Improvements on DXF import 

-Eccentricities of objects have changed due to modification of tapered member representation in case of frame corner in the last update. They are now adjusted to new representation. 

-In some cases, objects were selected even when not visible on the screen. The bug has been fixed. 

-Distributed wind loads were not possible to select by drawing a window from left to right. The bug has been fixed. In files created with earlier versions, the affected wind loads may have to be replaced or regenerated. 

-There was a problem with creating and loading macro welded box sections. The bug has been fixed. 

-Changing the seismic calculation method did not resulted in deleting the load combinations, only when initiating on Mass tab. The working process is harmonized now with Loads tab. 

-In some cases, the screen was flashing after analysis. The bug has been fixed. 

-There was a problem with composite beam design. The bug has been fixed. 

-Parameters of several sections in Chinese section library have been corrected. 

-Unreasonably high utilization ratios for hollow sections exposed to high torsion were fixed. 


**_Improvements:_**

-New warning message in case of incorrect placement of predescribed displacement 

-When opening Section module from analysis result diagram, stress diagrams will be opened instead of design results. 
