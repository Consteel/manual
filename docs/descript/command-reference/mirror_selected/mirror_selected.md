---
title: 'MIRROR_SELECTED'
description: ""
published: 2021-08-16
redirect_from: 
            - https://www.consteelsoftware.com/manual/descript-cspi/mirror_selected/
hero: ./img/wp-content-uploads-2021-08-image-30.png
---

Mirrors pre-selected objects.

### Description

Mirrors pre-selected model space objects across a vertical mirror plane. These objects can be members, plates, supports, links, loads etc.. The mirroring is defined by the coordinates of the 1. and 2. point of the mirror plane on the xy plane. The command will execute only if there is 1 or more objects selected.

![](./img/wp-content-uploads-2021-08-image-30.png)

### Syntax

**MIRROR_SELECTED** \[x1] \[y1] \[x2] \[y2]

### Command parameters

| **Command parameter**      | **Assignment** | **Value format** | **Input options** |
| -------------------------- | -------------- | ---------------- | ----------------- |
| [x1, y1](#x1-y1)           | Required       | Integer          | Local, variable   |
| [x2, y2](#x2-y2)           | Required       | Integer          | Local, variable   |

#### x1, y1:
X and y coordinates of the 1. point of the vertical mirror plane.

#### x2, y2:
X and y coordinates of the 2. point of the vertical mirror plane.

### Sample code

**Command only:**

```
MIRROR_SELECTED 0 -2000 0 5000
```

**With added prerequisites:** (object creation and selection)

```
LOAD_SECTION_LIBRARY Sec_ID1 "HEA 200"

CREATE Mem_ID1 Structural_member "HEA 200"
3000 0 0
3000 0 3000

CREATE Mem_ID2 Structural_Member "HEA 200"
3000 3000 0
3000 3000 3000

SELECT ALL

MIRROR_SELECTED 0 -2000 0 5000
```

[![](https://consteelsoftware.com/wp-content/uploads/2021/10/image-10.png)](./img/wp-content-uploads-2021-10-image-10.png)
