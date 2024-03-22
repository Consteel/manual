---
title: 'WRITE_FILE'
description: ""
published: 2021-11-17
redirect_from: 
            - https://www.consteelsoftware.com/manual/descript-cspi/write_file/
hero: ../../../defaultHero.jpg
---
<!-- wp:paragraph -->

Writes an output to the currently open text file.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Syntax

<!-- /wp:heading -->

<!-- wp:paragraph -->

**WRITE_FILE **\[Output]

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Command parameters

<!-- /wp:heading -->

<!-- wp:table {"className":"is-style-stripes"} -->

|                            |                |                  |                   |
| -------------------------- | -------------- | ---------------- | ----------------- |
| **Command parameter**      | **Assignment** | **Value format** | **Input options** |
| [Output](#Output-variable) | Required       | String           | Local, variable   |

<!-- /wp:table -->

<!-- wp:heading {"level":4} -->

#### Output:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Output value that will be written into the specified text file.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Description

<!-- /wp:heading -->

<!-- wp:paragraph -->

Writes an output to the currently open text file. In case the text file is not empty to begin with, outputs are written after the existing content of the text file, into the first available empty row. Subsequent WRITE_FILE commands will save outputs into separate rows within the text file.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

This command works only if a text file was previously opened with the [OPEN_FILE](https://consteelsoftware.com/manual/descript-cspi/open_file/) command, and takes effect only when the text file is closed with the [CLOSE_FILE](https://consteelsoftware.com/manual/descript-cspi/close_file/) command.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Sample code:

<!-- /wp:heading -->

<!-- wp:heading {"level":4} -->

#### Command only:

<!-- /wp:heading -->

<!-- wp:loos-hcb/code-block -->

```
WRITE_FILE 12345
```

<!-- /wp:loos-hcb/code-block -->

<!-- wp:heading {"level":4} -->

#### With added open, close and variable definition:

<!-- /wp:heading -->

<!-- wp:loos-hcb/code-block -->

```
$Output=12345

OPEN_FILE c:\Temp\Sample.txt

WRITE_FILE $Output

CLOSE_FILE
```

<!-- /wp:loos-hcb/code-block -->
