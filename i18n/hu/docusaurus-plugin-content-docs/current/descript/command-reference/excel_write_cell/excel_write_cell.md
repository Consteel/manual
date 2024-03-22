---
title: 'EXCEL_WRITE_CELL'
description: ""
published: 2021-09-06
redirect_from: 
            - https://www.consteelsoftware.com/manual/descript-cspi/excel_write_cell/
hero: ../../../defaultHero.jpg
---
<!-- wp:paragraph -->

Writes a value into a specific cell in an excel spreadsheet.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Syntax

<!-- /wp:heading -->

<!-- wp:paragraph -->

**EXCEL_WRITE_CELL **

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Command parameters

<!-- /wp:heading -->

<!-- wp:table {"className":"is-style-stripes"} -->

|                                   |                |                  |                   |
| --------------------------------- | -------------- | ---------------- | ----------------- |
| **Command parameter**             | **Assignment** | **Value format** | **Input options** |
| [Worksheet name](#Worksheet-name) | Required       | String           | Local, variable   |
| [Column name](#Column-name)       | Required       | String           | Local, variable   |
| [Row number](#Row-number)         | Required       | Integer          | Local, variable   |
| [Output](#Output)                 | Required       | String           | Local, variable   |

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

#### Output:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Output value that will be written into the specified cell.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Description

<!-- /wp:heading -->

<!-- wp:paragraph -->

Writes a value into a specific cell in an excel spreadsheet.

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
EXCEL_WRITE_CELL Sheet1 A 1 "Excel Output"
```

<!-- /wp:loos-hcb/code-block -->

<!-- wp:heading {"level":4} -->

#### With added open, close commands and variable definition:

<!-- /wp:heading -->

<!-- wp:loos-hcb/code-block -->

```
EXCEL_OPEN c:\Temp\Sample_Excel.xlsx

$Excel_Output=Test_Value

EXCEL_WRITE_CELL Sheet1 A 1 $Excel_Output

EXCEL_CLOSE
```

<!-- /wp:loos-hcb/code-block -->
