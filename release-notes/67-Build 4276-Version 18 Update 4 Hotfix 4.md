---
slug: 67-Build 4276-Version 18 Update 4 Hotfix 4
title: Build 4276-Version 18 Update 4 Hotfix 4

tags: [consteel, update]
---

**01-09-2025 	build 4276**


_**Bug fixes:**_

- When changing the cross section of a bar member to which a smart link connected, either the link was not adopted or the position of the connecting second bar member (generally purlin). The bug has been fixed.
- Because of the incorrect order of the LTS edges, some bar members were not recognized as being in the plane of the LTS and so not assigned to them. The bug has been fixed. 
- Correction in the result table for M+V interaction 
 
_**Modifications:**_ 

- Model repairing processes were automatically executed at model open and start of analysis earlier. The initiation of these processes has been exposed to the Diagnostics panel under Repair button in order to make it available for the user to control whether they want to run them or not. 