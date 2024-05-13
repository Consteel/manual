---
title: 'MOVE_SELECTED'
description: ""
published: 2021-11-17
redirect_from: 
            - https://www.consteelsoftware.com/manual/descript-cspi/move_selected/
hero: ../../../defaultHero.jpg
---

Moves pre-selected objects.

### Description

Moves pre-selected model space objects, which can be members, plates, supports, links, loads etc.. The vector of action is defined by base and end point coordinates. The command will execute only if there is 1 or more objects selected.

### Syntax

**MOVE_SELECTED** \[x1] \[y1] \[z1] \[x2] \[y2] \[z2]

### Command parameters

| **Command parameter**   | **Assignment** | **Value format** | **Input options** |
| ----------------------- | -------------- | ---------------- | ----------------- |
| [x1, y1, z1](#x1-y1-z1) | Required       | Integer          | Local, variable   |
| [x2, y2, z2](#x2-y2-z2) | Required       | Integer          | Local, variable   |

#### x1, y1, z1:
Coordinates of base point for the definition of the vector of action.

#### x2, y2, z2:
Coordinates of end point for the definition of the vector of action.

### Sample code

**Command only:**

```
MOVE_SELECTED 0 0 0 1000 1000 1000
```

**With added prerequisites:** (object creation and selection)

Direct input of coordinates:

```
LOAD_SECTION_LIBRARY Sec_ID1 "HEA 200"

CREATE ID1 Structural_member "HEA 200"
0 0 0
0 0 3000

SELECT ALL

MOVE_SELECTED 0 0 0 1000 1000 1000
```

Coordinates given with variables:

```
LOAD_SECTION_LIBRARY Sec_ID1 "HEA 200"

CREATE ID1 Structural_member "HEA 200"
0 0 0
0 0 3000

$bx=0
$by=0
$bz=0
$ex=1000
$ey=1000
$ez=1000

SELECT ALL

MOVE_SELECTED $bx $by $bz $ex $ey $ez
```
