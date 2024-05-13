---
title: 'EXCEL_OPEN'
description: ""
published: 2021-08-25
redirect_from: 
            - https://www.consteelsoftware.com/manual/descript-cspi/excel_open/
hero: ../../../defaultHero.jpg
---

Opens an excel file.

### Description

Opens an excel file. In order to be able to [read](/docs/descript/command-reference/excel_read_cell/) from and [write ](/docs/descript/command-reference/excel_write_cell/)to an excel file, it first has to be opened. The excel file has to already be saved to the specified file path for the open command to work. Descript can only work with 1 excel spreadsheet at a time. This command specifies the excel file on which operations can be done later in the script run.

If the file is already open, then this command will open it again in another window. If there is another excel that was opened within the current script run and is still open, then this command will close that one, and open the new one at the given file path.
### Syntax

**EXCEL_OPEN** [File path]

### Command parameters

| **Command parameter**   | **Assignment** | **Value format** | **Input options** |
| ----------------------- | -------------- | ---------------- | ----------------- |
| [File path](#file-path) | Required       | String           | Local, variable   |

#### File path:
Path, file name and extension of the excel file.

### Sample code
```
EXCEL_OPEN c:\Temp\Sample_Excel.xlsx
```
