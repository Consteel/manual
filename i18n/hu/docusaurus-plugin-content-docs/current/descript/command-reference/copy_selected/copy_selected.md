---
title: 'COPY_SELECTED'
description: ""
published: 2021-11-17
redirect_from: 
            - https://www.consteelsoftware.com/manual/descript-cspi/copy_selected/
hero: ../../../defaultHero.jpg
---
<!-- wp:paragraph -->

Copies pre-selected objects.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Syntax

<!-- /wp:heading -->

<!-- wp:paragraph -->

**COPY_SELECTED **\[x1] \[y1] \[z1] \[x2] \[y2] \[z2] \[CopyNumber] \[CopyStruct] \[CopyLoad] \[CopySupport] \[CreateLines]

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Command parameters

<!-- /wp:heading -->

<!-- wp:table {"className":"is-style-stripes"} -->

|                             |                |                         |                   |
| --------------------------- | -------------- | ----------------------- | ----------------- |
| **Command parameter**       | **Assignment** | **Value format**        | **Input options** |
| [x1, y1, z1](#x1,-y1,-z1)   | Required       | Integer                 | Local, variable   |
| [x2, y2, z2](#x2,-y2,-z2)   | Required       | Integer                 | Local, variable   |
| [CopyNumber](#CopyNumber)   | Optional       | "Copy=" + integer       | Local, variable   |
| [CopyStruct](#CopyStruct)   | Optional       | "CopyStruct=" + 0 or 1  | Local, variable   |
| [CopyLoad](#CopyLoad)       | Optional       | "CopyLoad=" + 0 or 1    | Local, variable   |
| [CopySupport](#CopySupport) | Optional       | "CopySupport=" + 0 or 1 | Local, variable   |
| [CreateLines](#CreateLines) | Optional       | "CreateLines=" + 0 or 1 | Local, variable   |

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

<!-- wp:heading {"level":4} -->

#### CopyNumber:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Number of copies created.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

The assignment of this parameter is optional. Default value: "Copy=1"

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### CopyStruct:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Controls if structural elements are copied or not. Useful when only load and/or supports are needed to be copied.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

The assignment of this parameter is optional. Default value: "CopyStruct=1"

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### CopyLoad:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Controls if loads are copied or not. Useful when loads needed to be excluded from copying.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

The assignment of this parameter is optional. Default value: "CopyLoad=1"

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### CopySupport:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Controls if supports are copied or not. Useful when supports are needed to be excluded from copying.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

The assignment of this parameter is optional. Default value: "CopySupport=1"

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### CreateLines:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Controls if lines are to be created between the original and the copied objects.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

The assignment of this parameter is optional. Default value: "CreateLines=0"

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Description

<!-- /wp:heading -->

<!-- wp:paragraph -->

Copies pre-selected model space objects, which can be members, plates, supports, links, loads etc.. The vector of action is defined by base and end point coordinates. The command will execute only if there is 1 or more objects selected.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Sample code:

<!-- /wp:heading -->

<!-- wp:heading {"level":4} -->

#### Command only (minimal parameters):

<!-- /wp:heading -->

<!-- wp:loos-hcb/code-block {"isLineShow":"on"} -->

```
COPY_SELECTED 0 0 0 1000 1000 1000
```

<!-- /wp:loos-hcb/code-block -->

<!-- wp:heading {"level":4} -->

#### With added prerequisites (object creation and selection) and all parameters:

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

COPY_SELECTED 0 0 0 1000 1000 1000 "Copy=1" "CopyStruct=1" "CopyLoad=1" "CopySupport=1" "CreateLines=0"
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

COPY_SELECTED $bx $by $bz $ex $ey $ez "Copy=1" "CopyStruct=1" "CopyLoad=1" "CopySupport=1" "CreateLines=0"
```

<!-- /wp:loos-hcb/code-block -->
