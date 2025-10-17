---
title: 'EXCEL_READ_CELL'
description: ""
published: 2021-11-17
redirect_from: 
            - https://www.consteelsoftware.com/manual/descript-cspi/excel_read_cell/
hero: ../../../defaultHero.jpg
---

Reads out the value stored in a specific cell in an excel spreadsheet.

### Description

Reads out the value stored in a specific cell in an excel spreadsheet. This command works only if an excel file was previously opened with the [EXCEL_OPEN](/docs/descript/command-reference/excel_open/) command. After all the operations with a specific excel file are done within a script, it is advised to close the excel file with the [EXCEL_CLOSE](/docs/descript/command-reference/excel_close/) command.
### Syntax

**EXCEL_READ_CELL** [Worksheet name] [Column name] [Row number] [Readout variable]

### Command parameters

| **Command parameter**                 | **Assignment** | **Value format** | **Input options** |
| ------------------------------------- | -------------- | ---------------- | ----------------- |
| [Worksheet name](#worksheet-name)     | Required       | String           | Local, variable   |
| [Column name](#column-name)           | Required       | String           | Local, variable   |
| [Row number](#row-number)             | Required       | Integer          | Local, variable   |
| [Readout variable](#readout-variable) | Required       | String           | Local, variable   |

#### Worksheet name:
Name of the worksheet within the currently opened excel file.

#### Column name:
Name of the column within the specified worksheet of the currently opened excel file.

#### Row number:
Number of the row within the column.

#### Readout variable:
Name of variable that will store the value read out from the specified cell.

### Sample code

**Command only:**

```
EXCEL_READ_CELL Sheet1 A 1 Cell_Readout
```

**With added open and close commands:**

```
EXCEL_OPEN c:\Temp\Sample_Excel.xlsx

EXCEL_READ_CELL Sheet1 A 1 Cell_Readout

EXCEL_CLOSE
```
