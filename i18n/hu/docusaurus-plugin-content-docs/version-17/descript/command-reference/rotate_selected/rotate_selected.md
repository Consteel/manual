---
title: 'ROTATE_SELECTED'
description: ""
published: 2021-11-17
redirect_from: 
            - https://www.consteelsoftware.com/manual/descript-cspi/rotate_selected/
hero: ./img/wp-content-uploads-2021-08-image-27.png
---

Rotates pre-selected objects.

### Description

Rotates pre-selected model space objects, which can be members, plates, supports, links, loads etc.. The roation is defined by the coordinates of the center of rotation, the coordinates of a reference point, and the angle of rotation. The command will execute only if there is 1 or more objects selected.

![](./img/wp-content-uploads-2021-08-image-27.png)

### Syntax

**ROTATE_SELECTED** \[CentX] \[CentY] \[CentZ] \[RefX] \[RefY] \[RefZ] \[Angle]

### Command parameters

| **Command parameter**                     | **Assignment** | **Value format** | **Input options** |
| ----------------------------------------- | -------------- | ---------------- | ----------------- |
| [CentX, CentY, CentZ](#centx-centy-centz) | Required       | Integer          | Local, variable   |
| [RefX, RefY, RefZ](#refx-refy-refz)       | Required       | Integer          | Local, variable   |
| [Angle](#angle)                           | Required       | Integer          | Local, variable   |

#### CentX, CentY, CentZ:
Coordinates of the center of rotation.

#### RefX, RefY, RefZ:
Coordinates of the reference point.

#### Angle:
Angle of rotation. Unit of measurment: degrees \[°].

### Sample code

**Command only:**

```
ROTATE_SELECTED 0 0 0 5000 0 0 90
```

**With added prerequisites:** (object creation and selection)
```
LOAD_SECTION_LIBRARY Sec_ID1 "HEA 200"

CREATE Mem_ID1 Structural_member "HEA 200"
0 0 0
0 0 3000

CREATE Mem_ID2 Structural_Member "HEA 200"
3000 0 0
3000 0 3000

SELECT ALL

ROTATE_SELECTED 0 0 0 5000 0 0 90
```

[![](https://consteelsoftware.com/wp-content/uploads/2021/08/image-29.png)](./img/wp-content-uploads-2021-08-image-29.png)
