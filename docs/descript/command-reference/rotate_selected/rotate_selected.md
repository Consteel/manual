---
title: 'ROTATE_SELECTED'
description: ""
published: 2021-11-17
redirect_from: 
            - https://www.consteelsoftware.com/manual/descript-cspi/rotate_selected/
hero: ./img/wp-content-uploads-2021-08-image-27.png
---
<!-- wp:paragraph -->

Rotates pre-selected objects.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Syntax

<!-- /wp:heading -->

<!-- wp:paragraph -->

**ROTATE_SELECTED **\[CentX] \[CentY] \[CentZ] \[RefX] \[RefY] \[RefZ] \[Angle]

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Command parameters

<!-- /wp:heading -->

<!-- wp:table {"className":"is-style-stripes"} -->

|                                             |                |                  |                   |
| ------------------------------------------- | -------------- | ---------------- | ----------------- |
| **Command parameter**                       | **Assignment** | **Value format** | **Input options** |
| [CentX, CentY, CentZ](#CentX,-CentY,-CentZ) | Required       | Integer          | Local, variable   |
| [RefX, RefY, RefZ](#RefX,-RefY,-RefZ)       | Required       | Integer          | Local, variable   |
| [Angle](#Angle)                             | Required       | Integer          | Local, variable   |

<!-- /wp:table -->

<!-- wp:heading {"level":4} -->

#### CentX, CentY, CentZ:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Coordinates of the center of rotation.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### RefX, RefY, RefZ:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Coordinates of the reference point.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Angle:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Angle of rotation. Unit of measurment: degrees \[°].

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Description

<!-- /wp:heading -->

<!-- wp:paragraph -->

Rotates pre-selected model space objects, which can be members, plates, supports, links, loads etc.. The roation is defined by the coordinates of the center of rotation, the coordinates of a reference point, and the angle of rotation. The command will execute only if there is 1 or more objects selected.

<!-- /wp:paragraph -->

<!-- wp:image {"id":23321,"sizeSlug":"full","linkDestination":"none"} -->

![](./img/wp-content-uploads-2021-08-image-27.png)

<!-- /wp:image -->

<!-- wp:heading {"level":3} -->

### Sample code:

<!-- /wp:heading -->

<!-- wp:heading {"level":4} -->

#### Command only:

<!-- /wp:heading -->

<!-- wp:loos-hcb/code-block -->

```
ROTATE_SELECTED 0 0 0 5000 0 0 90
```

<!-- /wp:loos-hcb/code-block -->

<!-- wp:heading {"level":4} -->

#### With added prerequisites (object creation and selection):

<!-- /wp:heading -->

<!-- wp:loos-hcb/code-block -->

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

<!-- /wp:loos-hcb/code-block -->

<!-- wp:image {"id":23335,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/08/image-29.png)](./img/wp-content-uploads-2021-08-image-29.png)

<!-- /wp:image -->
