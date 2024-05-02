---
title: 'WRITE_FILE'
description: ""
published: 2021-11-17
redirect_from: 
            - https://www.consteelsoftware.com/manual/descript-cspi/write_file/
hero: ../../../defaultHero.jpg
---

Writes an output to the currently open text file.

### Description

Writes an output to the currently open text file. In case the text file is not empty to begin with, outputs are written after the existing content of the text file, into the first available empty row. Subsequent WRITE_FILE commands will save outputs into separate rows within the text file.

This command works only if a text file was previously opened with the [OPEN_FILE](/docs/descript/command-reference/open_file/) command, and takes effect only when the text file is closed with the [CLOSE_FILE](/docs/descript/command-reference/close_file/) command.

### Syntax

**WRITE_FILE** \[Output]

### Command parameters

| **Command parameter**      | **Assignment** | **Value format** | **Input options** |
| -------------------------- | -------------- | ---------------- | ----------------- |
| [Output](#output)          | Required       | String           | Local, variable   |

#### Output:
Output value that will be written into the specified text file.

### Sample code

**Command only:**

```
WRITE_FILE 12345
```

**With added open, close and variable definition:**

```
$Output=12345

OPEN_FILE c:\Temp\Sample.txt

WRITE_FILE $Output

CLOSE_FILE
```
