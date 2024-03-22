---
title: 'STRISNUM'
description: ""
published: 2021-11-17
redirect_from: 
            - https://www.consteelsoftware.com/manual/descript-cspi/strisnum/
hero: ../../../defaultHero.jpg
---
<!-- wp:paragraph -->

Tells if a string is a number or not.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Syntax

<!-- /wp:heading -->

<!-- wp:paragraph -->

**STRISNUM **\[String]

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Command parameters

<!-- /wp:heading -->

<!-- wp:table {"className":"is-style-stripes"} -->

|                                     |                |                  |                   |
| ----------------------------------- | -------------- | ---------------- | ----------------- |
| **Command parameter**               | **Assignment** | **Value format** | **Input options** |
| [String](#String)                   | Required       | String           | Local, variable   |
| [Output variable](#Output-variable) | Required       | String           | Local, variable   |

<!-- /wp:table -->

<!-- wp:heading {"level":4} -->

#### String:

<!-- /wp:heading -->

<!-- wp:paragraph -->

The string that might be a number.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Output variable:

<!-- /wp:heading -->

<!-- wp:paragraph -->

The variable that will store the output.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Description

<!-- /wp:heading -->

<!-- wp:paragraph -->

Tells if a string is a number or not. If the string is a number, then the output is "1", if not then the output is "0". The decimal separator character is what is set by the operating system (typically "." or ",").

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Sample code:

<!-- /wp:heading -->

<!-- wp:loos-hcb/code-block -->

```
STRISNUM 123 Output_Variable
```

<!-- /wp:loos-hcb/code-block -->
