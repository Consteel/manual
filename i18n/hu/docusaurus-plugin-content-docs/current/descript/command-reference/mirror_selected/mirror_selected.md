---
title: 'MIRROR_SELECTED'
description: ""
published: 2021-08-16
redirect_from: 
            - https://www.consteelsoftware.com/manual/descript-cspi/mirror_selected/
hero: ./img/wp-content-uploads-2021-08-image-30.png
---
<!-- wp:paragraph -->

Mirrors pre-selected objects.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Syntax

<!-- /wp:heading -->

<!-- wp:paragraph -->

**MIRROR_SELECTED** \[x1] \[y1] \[x2] \[y2]

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Command parameters

<!-- /wp:heading -->

<!-- wp:table {"className":"is-style-stripes"} -->

|                       |                |                  |                   |
| --------------------- | -------------- | ---------------- | ----------------- |
| **Command parameter** | **Assignment** | **Value format** | **Input options** |
| \[x1] \[y1]           | Required       | Integer          | Local, variable   |
| \[x2] \[y2]           | Required       | Integer          | Local, variable   |

<!-- /wp:table -->

<!-- wp:heading {"level":4} -->

#### \[x1] \[y1]:

<!-- /wp:heading -->

<!-- wp:paragraph -->

X and y coordinates of the 1. point of the vertical mirror plane.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### \[x2] \[y2]:

<!-- /wp:heading -->

<!-- wp:paragraph -->

X and y coordinates of the 2. point of the vertical mirror plane.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Description

<!-- /wp:heading -->

<!-- wp:paragraph -->

Mirrors pre-selected model space objects, which can be members, plates, supports, links, loads etc.. The mirroring is defined by the coordinates of the 1. and 2. point of the mirror plane on the xy plane. The command will execute only if there is 1 or more objects selected.

<!-- /wp:paragraph -->

<!-- wp:image {"id":23349,"sizeSlug":"full","linkDestination":"none"} -->

![](./img/wp-content-uploads-2021-08-image-30.png)

<!-- /wp:image -->

<!-- wp:heading {"level":3} -->

### Sample code:

<!-- /wp:heading -->

<!-- wp:heading {"level":4} -->

#### Command only:

<!-- /wp:heading -->

<!-- wp:loos-hcb/code-block -->

```
MIRROR_SELECTED 0 -2000 0 5000
```

<!-- /wp:loos-hcb/code-block -->

<!-- wp:heading {"level":4} -->

#### With added prerequisites (object creation and selection):

<!-- /wp:heading -->

<!-- wp:loos-hcb/code-block -->

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

<!-- /wp:loos-hcb/code-block -->

<!-- wp:image {"id":26032,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/10/image-10.png)](./img/wp-content-uploads-2021-10-image-10.png)

<!-- /wp:image -->
