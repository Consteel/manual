---
title: 'EXCEL_COUNT_FILLED_ROWS'
description: ""
published: 2021-08-25
redirect_from: 
            - https://www.consteelsoftware.com/manual/descript-cspi/excel_count_filled_rows/
hero: ../../../defaultHero.jpg
---

Counts the filled rows in a column of an excel spreadsheet.

### Description

Counts the filled rows in a column of an excel spreadsheet. This command works only if an excel file was previously opened with the [EXCEL_OPEN](/docs/descript/command-reference/excel_open/) command. After all the operations with a specific excel file are done within a script, it is advised to close the excel file with the [EXCEL_CLOSE](/docs/descript/command-reference/excel_close/) command.

### Syntax

**EXCEL_COUNT_FILLED_ROWS** [Worksheet name] [Column name] [Result variable]

### Command parameters

| **Command parameter**               | **Assignment** | **Value format** | **Input options** |
| ----------------------------------- | -------------- | ---------------- | ----------------- |
| [Worksheet name](#worksheet-name)   | Required       | String           | Local, variable   |
| [Column name](#column-name)         | Required       | String           | Local, variable   |
| [Result variable](#result-variable) | Required       | String           | Local, variable   |

#### Worksheet name:
Name of the worksheet within the currently opened excel file.

#### Column name:
Name of the column within the specified worksheet of the currently opened excel file.

#### Result variable:
Name of variable that will store the number of the filled rows.

### Sample code

**Command only:**

```
EXCEL_COUNT_FILLED_ROWS Sheet1 A Excel_Row_Count
```

**With added prerequisites:**

```
EXCEL_OPEN c:\Temp\Sample_Excel.xlsx
EXCEL_COUNT_FILLED_ROWS Sheet1 A Excel_Row_Count
```
