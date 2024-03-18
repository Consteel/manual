---
title: 'ARRAY_ADD'
description: ""
published: 2021-11-17
redirect_from: 
            - https://www.consteelsoftware.com/manual/descript-cspi/array_add/
hero: ../../../defaultHero.jpg
---
<!-- wp:paragraph -->

Adds an item to an array.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Syntax

<!-- /wp:heading -->

<!-- wp:paragraph -->

**ARRAY_ADD **

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Command parameters

<!-- /wp:heading -->

<!-- wp:table {"className":"is-style-stripes"} -->

|                           |                |                        |                   |
| ------------------------- | -------------- | ---------------------- | ----------------- |
| **Command parameter**     | **Assignment** | **Value format**       | **Input options** |
| [Array name](#Array-name) | Required       | String                 | Local, variable   |
| [Item value](#Item-value) | Required       | String, integer, float | Local, variable   |

<!-- /wp:table -->

<!-- wp:heading {"level":4} -->

#### Array name:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Name of the array.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Item value:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Value of the item.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Description

<!-- /wp:heading -->

<!-- wp:paragraph -->

Adds an item to an array with the specified value to the first available index number. If the array was not defined previously, then this command will create the array, and then add the item as the first entry (index=0).

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Sample code:

<!-- /wp:heading -->

<!-- wp:loos-hcb/code-block -->

```
ARRAY_ADD Data 1234
```

<!-- /wp:loos-hcb/code-block -->

<!-- wp:paragraph -->

<!-- /wp:paragraph -->
