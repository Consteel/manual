---
title: 'MOVE_SELECTED_POINT_OR_EDGE'
description: ""
published: 2021-08-30
redirect_from: 
            - https://www.consteelsoftware.com/manual/descript-cspi/move_selected_point_or_edge/
hero: ../../../defaultHero.jpg
---

Moves pre-selected points and edges.

### Description

Moves pre-selected points or edges. The vector of action is defined by base and end point coordinates. The command will execute only if there is 1 or more point or edge selected.

### Syntax

**MOVE_SELECTED_POINT_OR_EDGE** \[x1] \[y1] \[z1] \[x2] \[y2] \[z2]

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
MOVE_SELECTED_POINT_OR_EDGE 0 0 0 0 1000 0
```

**With added prerequisites:** (object creation)
```
LOAD_SECTION_LIBRARY Sec_ID1 "HEA 200"

CREATE Mem_ID1 Structural_member "HEA 200"
0 0 0
0 0 3000

SELECT By_Attribute Point
X 0
Y 0
Z 0

MOVE_SELECTED_POINT_OR_EDGE 0 0 0 0 1000 0
```
