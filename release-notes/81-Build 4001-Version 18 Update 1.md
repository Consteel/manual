---
slug: 81-Build 4001-Version 18 Update 1
title: Build 4001-Version 18 Update 1

tags: [consteel, update]
---

**13-02-2025 	build 4001**


_**Bug fixes:**_

- Reference point definition was missing from Tekla import. The bug has been fixed. 
- Color assignment for battened sections
- Unnecessary diagnostic error after exiting Section Drafter was fixed
- Crash when opening two New storey dialogs fixed
- Markers disappeared after analysis rerun. The bug has been fixed.
- Deleting objects was difficult after selecting them by double clicking on object property name in Property tree. The bug has been fixed
- Unsupported bar members with double cold-formed sections were not recognized in Diagnostics. The bug has been fixed 
- Model previews on Steelspace are fixed
- Supports were incorrectly displayed on FEM tab in some cases. The bug has been fixed. Analysis is not affected.
- The software crashed when Descript was trying to open an Excel file which was already opened. The bug has been fixed. 
- Fixes regarding analysis result mx and placing markers for shell elements
- Fix of crash when deleting member during Move point or edge feature
- Crash of analysis of battened sections has been fixed. 
- Generation of SLS load combinations in Descript fixed.
- Loads in Sile script fixed
- Documentation generation of composite column crashed. The bug has been fixed. 
- Missing detailed design results fixed in documentation


_**Improvements:**_

- Romanian standard has been introduced instead of EN Romanian NA. 
- Fictive joint function is implemented for exporting internal forces of joints to .csv format
- Model can be exported to .xml format to provide possibility of importing it into IDEA StatiCa Checkbot 24.1
- Load combinations can now be ordered by values of factors
- Double cold-formed sections in Descript
- Several Consteel features were added to the list of functions we collect usage statistics about.
- Check of presence of USB dongle driver implemented to detect possible cause of protection errors. 
- Standard references for Chinese library sections improved

_**Modifications:**_

- csJoint.exe has been terminated