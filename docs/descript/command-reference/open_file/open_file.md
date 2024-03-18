---
title: 'OPEN_FILE'
description: ""
published: 2021-11-17
redirect_from: 
            - https://www.consteelsoftware.com/manual/descript-cspi/open_file/
hero: ../../../defaultHero.jpg
---
<!-- wp:paragraph -->

Selects a text file for output.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Syntax

<!-- /wp:heading -->

<!-- wp:paragraph -->

**OPEN_FILE **

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Command parameters

<!-- /wp:heading -->

<!-- wp:table {"className":"is-style-stripes"} -->

|                         |                |                  |                   |
| ----------------------- | -------------- | ---------------- | ----------------- |
| **Command parameter**   | **Assignment** | **Value format** | **Input options** |
| [File path](#File-path) | Required       | String           | Local, variable   |

<!-- /wp:table -->

<!-- wp:heading {"level":4} -->

#### File path:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Path, file name and extension of the text file.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Description

<!-- /wp:heading -->

<!-- wp:paragraph -->

Selects a text file for output. In order to be able to [write](https://consteelsoftware.com/manual/descript-cspi/write_file/) to a text file, it first has to be opened. The text file has to already be saved to the specified file path for the OPEN_FILE command to work.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Sample code:

<!-- /wp:heading -->

<!-- wp:loos-hcb/code-block -->

```
OPEN_FILE c:\Temp\Sample.txt
```

<!-- /wp:loos-hcb/code-block -->
