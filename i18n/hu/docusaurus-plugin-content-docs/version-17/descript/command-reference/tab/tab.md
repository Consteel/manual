---
title: 'TAB'
description: ""
published: 2023-08-14
redirect_from: 
            - https://www.consteelsoftware.com/manual/descript-cspi/tab/
hero: ../../../defaultHero.jpg
---

Changes tab in the main window. <span style={{color:"MediumSeaGreen"}}>(since CS 17)</span>

### Description

Switches to display the given tab in the main window of the Consteel GUI.

### Syntax

**TAB** [Tab name]

### Command parameters

| **Command parameter**   | **Assignment** | **Value format**                                      | **Input options** |
| ----------------------- | -------------- | ----------------------------------------------------- | ----------------- |
| [Tab name](<#tab-name>) | Required       | [Predefined strings](#Available-tab-parameter-values) | Local, variable   |

#### Tab name:
Parameter that points to a specific tab is the Consteel GUI.

<span id="Available-tab-parameter-values" style={{paddingTop: '80px'}}> Available tab names: </span>
- Geometry
- Structural_Members
- Loads
- Mass
- Finite_Element
- Analysis
- Global_Checks
- Member_Checks

### Sample code
```
TAB Structural_Members
```
