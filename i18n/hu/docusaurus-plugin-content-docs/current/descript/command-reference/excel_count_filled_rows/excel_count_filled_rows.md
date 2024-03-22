---
title: 'EXCEL_COUNT_FILLED_ROWS'
description: ""
published: 2021-08-25
redirect_from: 
            - https://www.consteelsoftware.com/manual/descript-cspi/excel_count_filled_rows/
hero: ../../../defaultHero.jpg
---
<!-- wp:paragraph -->

Counts the filled rows in a column of an excel spreadsheet.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Syntax

<!-- /wp:heading -->

<!-- wp:paragraph -->

**EXCEL_COUNT_FILLED_ROWS **

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Command parameters

<!-- /wp:heading -->

<!-- wp:table {"className":"is-style-stripes"} -->

|                                     |                |                  |                   |
| ----------------------------------- | -------------- | ---------------- | ----------------- |
| **Command parameter**               | **Assignment** | **Value format** | **Input options** |
| [Worksheet name](#Worksheet-name)   | Required       | String           | Local, variable   |
| [Column name](#Column-name)         | Required       | String           | Local, variable   |
| [Result variable](#Result-variable) | Required       | String           | Local, variable   |

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

#### Result variable:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Name of variable that will store the number of the filled rows.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Description

<!-- /wp:heading -->

<!-- wp:paragraph -->

Counts the filled rows in a column of an excel spreadsheet.

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
EXCEL_COUNT_FILLED_ROWS Sheet1 A Excel_Row_Count
```

<!-- /wp:loos-hcb/code-block -->

<!-- wp:heading {"level":4} -->

#### With added prerequisites:

<!-- /wp:heading -->

<!-- wp:loos-hcb/code-block -->

```
EXCEL_OPEN c:\Temp\Sample_Excel.xlsx
EXCEL_COUNT_FILLED_ROWS Sheet1 A Excel_Row_Count
```

<!-- /wp:loos-hcb/code-block -->
