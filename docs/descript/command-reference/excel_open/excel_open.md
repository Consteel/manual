---
title: 'EXCEL_OPEN'
description: ""
published: 2021-08-25
redirect_from: 
            - https://www.consteelsoftware.com/manual/descript-cspi/excel_open/
hero: ../../../defaultHero.jpg
---
<!-- wp:paragraph -->

Opens an excel file.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Syntax

<!-- /wp:heading -->

<!-- wp:paragraph -->

**EXCEL_OPEN **

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

Path, file name and extension of the excel file.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Description

<!-- /wp:heading -->

<!-- wp:paragraph -->

Opens an excel file. In order to be able to [read](https://consteelsoftware.com/manual/descript-cspi/excel_read_cell/) from and [write ](https://consteelsoftware.com/manual/descript-cspi/excel_write_cell/)to an excel file, it first has to be opened. The excel file has to already be saved to the specified file path for the open command to work. Descript can only work with 1 excel spreadsheet at a time. This command specifies the excel file on which operations can be done later in the script run.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

If the file is already open, then this command will open it again in another window. If there is another excel that was opened within the current script run and is still open, then this command will close that one, and open the new one at the given file path.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Sample code:

<!-- /wp:heading -->

<!-- wp:loos-hcb/code-block -->

```
EXCEL_OPEN c:\Temp\Sample_Excel.xlsx
```

<!-- /wp:loos-hcb/code-block -->
