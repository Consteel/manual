---
title: 'ARRAY_SET'
description: ""
published: 2021-11-17
redirect_from: 
            - https://www.consteelsoftware.com/manual/descript-cspi/array_set/
hero: ../../../defaultHero.jpg
---
<!-- wp:paragraph -->

Sets the value of an item in an array.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Syntax

<!-- /wp:heading -->

<!-- wp:paragraph -->

**ARRAY_SET **

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Command parameters

<!-- /wp:heading -->

<!-- wp:table {"className":"is-style-stripes"} -->

|                           |                |                        |                   |
| ------------------------- | -------------- | ---------------------- | ----------------- |
| **Command parameter**     | **Assignment** | **Value format**       | **Input options** |
| [Array name](#Array-name) | Required       | String                 | Local, variable   |
| [Item index](#Item-index) | Required       | Integer                | Local, variable   |
| [Item value](#Item-value) | Required       | String, integer, float | Local, variable   |

<!-- /wp:table -->

<!-- wp:heading {"level":4} -->

#### Array name:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Name of the array.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Item index:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Index number of the item to be set. Indexing starts from 0, so the first item has the index number 0.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Item value:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Value of the item to be set.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Description

<!-- /wp:heading -->

<!-- wp:paragraph -->

Sets the value of a specific item in an array. If the array was not defined previously, then this command will create the array, and then set the specified item's value.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Sample code:

<!-- /wp:heading -->

<!-- wp:loos-hcb/code-block -->

```
ARRAY_SET Data 0 1234
```

<!-- /wp:loos-hcb/code-block -->

<!-- wp:paragraph -->

<!-- /wp:paragraph -->
