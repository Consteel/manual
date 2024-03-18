---
title: 'EXCEL_READ_CELL'
description: ""
published: 2021-11-17
redirect_from: 
            - https://www.consteelsoftware.com/manual/descript-cspi/excel_read_cell/
hero: ../../../defaultHero.jpg
---
<!-- wp:paragraph -->

Reads out the value stored in a specific cell in an excel spreadsheet.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Syntax

<!-- /wp:heading -->

<!-- wp:paragraph -->

**EXCEL_READ_CELL**

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Command parameters

<!-- /wp:heading -->

<!-- wp:table {"className":"is-style-stripes"} -->

|                                       |                |                  |                   |
| ------------------------------------- | -------------- | ---------------- | ----------------- |
| **Command parameter**                 | **Assignment** | **Value format** | **Input options** |
| [Worksheet name](#Worksheet-name)     | Required       | String           | Local, variable   |
| [Column name](#Column-name)           | Required       | String           | Local, variable   |
| [Row number](#Row-number)             | Required       | Integer          | Local, variable   |
| [Readout variable](#Readout-variable) | Required       | String           | Local, variable   |

<!-- /wp:table -->

<!-- wp:heading {"level":4} -->

#### Worksheet name:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Name of the worksheet within the currently opened excel file.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Column name:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Name of the column within the specified worksheet of the currently opened excel file.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Row number:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Number of the row within the column.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Readout variable:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Name of variable that will store the value read out from the specified cell.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Description

<!-- /wp:heading -->

<!-- wp:paragraph -->

Reads out the value stored in a specific cell in an excel spreadsheet.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

This command works only if an excel file was previously opened with the [EXCEL_OPEN](https://consteelsoftware.com/manual/descript-cspi/excel_open/) command. After all the operations with a specific excel file are done within a script, it is advised to close the excel file with the [EXCEL_CLOSE](https://consteelsoftware.com/manual/descript-cspi/excel_close/) command.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Sample code:

<!-- /wp:heading -->

<!-- wp:heading {"level":4} -->

#### Command only:

<!-- /wp:heading -->

<!-- wp:loos-hcb/code-block -->

```
EXCEL_READ_CELL Sheet1 A 1 Cell_Readout
```

<!-- /wp:loos-hcb/code-block -->

<!-- wp:heading {"level":4} -->

#### With added open and close commands:

<!-- /wp:heading -->

<!-- wp:loos-hcb/code-block -->

```
EXCEL_OPEN c:\Temp\Sample_Excel.xlsx

EXCEL_READ_CELL Sheet1 A 1 Cell_Readout

EXCEL_CLOSE
```

<!-- /wp:loos-hcb/code-block -->
