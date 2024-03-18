---
title: 'MOVE_SELECTED'
description: ""
published: 2021-11-17
redirect_from: 
            - https://www.consteelsoftware.com/manual/descript-cspi/move_selected/
hero: ../../../defaultHero.jpg
---
<!-- wp:paragraph -->

Moves pre-selected objects.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Syntax

<!-- /wp:heading -->

<!-- wp:paragraph -->

**MOVE_SELECTED **\[x1] \[y1] \[z1] \[x2] \[y2] \[z2]

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

Moves pre-selected model space objects, which can be members, plates, supports, links, loads etc.. The vector of action is defined by base and end point coordinates. The command will execute only if there is 1 or more objects selected.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Sample code:

<!-- /wp:heading -->

<!-- wp:heading {"level":4} -->

#### Command only:

<!-- /wp:heading -->

<!-- wp:loos-hcb/code-block -->

```
MOVE_SELECTED 0 0 0 1000 1000 1000
```

<!-- /wp:loos-hcb/code-block -->

<!-- wp:heading {"level":4} -->

#### With added prerequisites (object creation and selection):

<!-- /wp:heading -->

<!-- wp:paragraph -->

Direct input of coordinates:

<!-- /wp:paragraph -->

<!-- wp:loos-hcb/code-block -->

```
LOAD_SECTION_LIBRARY Sec_ID1 "HEA 200"

CREATE ID1 Structural_member "HEA 200"
0 0 0
0 0 3000

SELECT ALL

MOVE_SELECTED 0 0 0 1000 1000 1000
```

<!-- /wp:loos-hcb/code-block -->

<!-- wp:paragraph -->

Coordinates given with variables:

<!-- /wp:paragraph -->

<!-- wp:loos-hcb/code-block -->

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

<!-- /wp:loos-hcb/code-block -->

<!-- wp:paragraph -->

<!-- /wp:paragraph -->
