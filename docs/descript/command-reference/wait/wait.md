---
title: 'WAIT'
description: ""
published: 2021-09-03
redirect_from: 
            - https://www.consteelsoftware.com/manual/descript-cspi/wait/
hero: ../../../defaultHero.jpg
---
<!-- wp:paragraph -->

Waits a specified time before executing the next command.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Syntax

<!-- /wp:heading -->

<!-- wp:paragraph -->

**WAIT **

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Command parameters

<!-- /wp:heading -->

<!-- wp:table {"className":"is-style-stripes"} -->

|                         |                |                  |                   |
| ----------------------- | -------------- | ---------------- | ----------------- |
| **Command parameter**   | **Assignment** | **Value format** | **Input options** |
| [Wait time](#Wait-time) | Optional       | Integer          | Local, variable   |

<!-- /wp:table -->

<!-- wp:heading {"level":4} -->

#### Wait time:

<!-- /wp:heading -->

<!-- wp:paragraph -->

The amount of time while the next command will not be executed. Unit of time: miliseconds \[ms].

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

The assignment of this parameter is optional. Default value: 1000 \[ms].

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Description

<!-- /wp:heading -->

<!-- wp:paragraph -->

Waits a specified time before executing the next command.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Sample code:

<!-- /wp:heading -->

<!-- wp:heading {"level":4} -->

#### Command only:

<!-- /wp:heading -->

<!-- wp:loos-hcb/code-block -->

```
WAIT 1000
```

<!-- /wp:loos-hcb/code-block -->

<!-- wp:heading {"level":4} -->

#### Wait time with variable:

<!-- /wp:heading -->

<!-- wp:loos-hcb/code-block -->

```
$Wait_Time=2000
WAIT $Wait_Time
```

<!-- /wp:loos-hcb/code-block -->
