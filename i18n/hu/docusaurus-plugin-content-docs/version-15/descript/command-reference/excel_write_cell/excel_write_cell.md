---
title: 'EXCEL_WRITE_CELL'
description: ""
published: 2021-09-06
redirect_from: 
            - https://www.consteelsoftware.com/manual/descript-cspi/excel_write_cell/
hero: ../../../defaultHero.jpg
---

Writes a value into a specific cell in an excel spreadsheet.

### Description
Writes a value into a specific cell in an excel spreadsheet. This command works only if an excel file was previously opened with the [EXCEL_OPEN](/docs/descript/command-reference/excel_open/) command. After all the operations with a specific excel file are done within a script, it is advised to close the excel file with the [EXCEL_CLOSE](/docs/descript/command-reference/excel_close/) command.

### Syntax

**EXCEL_WRITE_CELL** [Worksheet name] [Column name] [Row number] \[Output]

### Command parameters

| **Command parameter**             | **Assignment** | **Value format** | **Input options** |
| --------------------------------- | -------------- | ---------------- | ----------------- |
| [Worksheet name](#worksheet-name) | Required       | String           | Local, variable   |
| [Column name](#column-name)       | Required       | String           | Local, variable   |
| [Row number](#row-number)         | Required       | Integer          | Local, variable   |
| [Output](#output)                 | Required       | String           | Local, variable   |

#### Worksheet name:
Name of the worksheet within the currently opened excel file.

#### Column name:
Name of the column within the specified worksheet of the currently opened excel file.

#### Row number:
Number of the row within the column.

#### Output:
Output value that will be written into the specified cell.

### Sample code

**Command only:**

```
EXCEL_WRITE_CELL Sheet1 A 1 "Excel Output"
```

**With added open, close commands and variable definition:**

```
EXCEL_OPEN c:\Temp\Sample_Excel.xlsx

$Excel_Output=Test_Value

EXCEL_WRITE_CELL Sheet1 A 1 $Excel_Output

EXCEL_CLOSE
```
