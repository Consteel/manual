---
title: 'COPY_SELECTED'
description: ""
published: 2021-11-17
redirect_from: 
            - https://www.consteelsoftware.com/manual/descript-cspi/copy_selected/
hero: ../../../defaultHero.jpg
---

Copies pre-selected objects.

### Description

Copies pre-selected model space objects, which can be members, plates, supports, links, loads etc.. The vector of action is defined by base and end point coordinates. The command will execute only if there are 1 or more objects selected.

### Syntax

**COPY_SELECTED** \[x1] \[y1] \[z1] \[x2] \[y2] \[z2] \[CopyNumber] \[CopyStruct] \[CopyLoad] \[CopySupport] \[CreateLines]

### Command parameters

| **Command parameter**       | **Assignment** | **Value format**        | **Input options** |
| --------------------------- | -------------- | ----------------------- | ----------------- |
| [x1, y1, z1](#x1-y1-z1)     | Required       | Integer                 | Local, variable   |
| [x2, y2, z2](#x2-y2-z2)     | Required       | Integer                 | Local, variable   |
| [CopyNumber](#copynumber)   | Optional       | "Copy=" + integer       | Local, variable   |
| [CopyStruct](#copyntruct)   | Optional       | "CopyStruct=" + 0 or 1  | Local, variable   |
| [CopyLoad](#copyload)       | Optional       | "CopyLoad=" + 0 or 1    | Local, variable   |
| [CopySupport](#copysupport) | Optional       | "CopySupport=" + 0 or 1 | Local, variable   |
| [CreateLines](#createlines) | Optional       | "CreateLines=" + 0 or 1 | Local, variable   |

#### x1, y1, z1:
Coordinates of base point for the definition of the vector of action.

#### x2, y2, z2:
Coordinates of end point for the definition of the vector of action.

#### CopyNumber:
Number of copies created.

The assignment of this parameter is optional. Default value: "Copy=1"

#### CopyStruct:
Controls if structural elements are copied or not. Useful when only load and/or supports are needed to be copied.

The assignment of this parameter is optional. Default value: "CopyStruct=1"

#### CopyLoad:
Controls if loads are copied or not. Useful when loads needed to be excluded from copying.

The assignment of this parameter is optional. Default value: "CopyLoad=1"

#### CopySupport:
Controls if supports are copied or not. Useful when supports are needed to be excluded from copying.

The assignment of this parameter is optional. Default value: "CopySupport=1"

#### CreateLines:
Controls if lines are to be created between the original and the copied objects.

The assignment of this parameter is optional. Default value: "CreateLines=0"

### Sample code

**Command only:** (minimal parameters)

```
COPY_SELECTED 0 0 0 1000 1000 1000
```

**With added prerequisites (object creation and selection) and all parameters:**

Direct input of coordinates:
```
LOAD_SECTION_LIBRARY Sec_ID1 "HEA 200"

CREATE ID1 Structural_member "HEA 200"
0 0 0
0 0 3000

SELECT ALL

COPY_SELECTED 0 0 0 1000 1000 1000 "Copy=1" "CopyStruct=1" "CopyLoad=1" "CopySupport=1" "CreateLines=0"
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

COPY_SELECTED $bx $by $bz $ex $ey $ez "Copy=1" "CopyStruct=1" "CopyLoad=1" "CopySupport=1" "CreateLines=0"
```
