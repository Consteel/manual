---
title: 'MOVE_SELECTED_POINT_OR_EDGE'
description: ""
published: 2021-08-30
redirect_from: 
            - https://www.consteelsoftware.com/manual/descript-cspi/move_selected_point_or_edge/
hero: ../../../defaultHero.jpg
---
<!-- wp:paragraph -->

Moves pre-selected points and edges.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Syntax

<!-- /wp:heading -->

<!-- wp:paragraph -->

**MOVE_SELECTED_POINT_OR_EDGE **\[x1] \[y1] \[z1] \[x2] \[y2] \[z2]

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Command parameters

<!-- /wp:heading -->

<!-- wp:table {"className":"is-style-stripes"} -->

|                           |                |                  |                   |
| ------------------------- | -------------- | ---------------- | ----------------- |
| **Command parameter**     | **Assignment** | **Value format** | **Input options** |
| [x1, y1, z1](#x1,-y1,-z1) | Required       | Integer          | Local, variable   |
| [x2, y2, z2](#x2,-y2,-z2) | Required       | Integer          | Local, variable   |

<!-- /wp:table -->

<!-- wp:heading {"level":4} -->

#### x1, y1, z1:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Coordinates of base point for the definition of the vector of action.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### x2, y2, z2:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Coordinates of end point for the definition of the vector of action.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Description

<!-- /wp:heading -->

<!-- wp:paragraph -->

Moves pre-selected points or edges. The vector of action is defined by base and end point coordinates. The command will execute only if there is 1 or more point or edge selected.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Sample code:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Command only:

<!-- /wp:paragraph -->

<!-- wp:loos-hcb/code-block -->

```
MOVE_SELECTED_POINT_OR_EDGE 0 0 0 0 1000 0
```

<!-- /wp:loos-hcb/code-block -->

<!-- wp:paragraph -->

With added prerequisites (object creation):

<!-- /wp:paragraph -->

<!-- wp:loos-hcb/code-block -->

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

<!-- /wp:loos-hcb/code-block -->
