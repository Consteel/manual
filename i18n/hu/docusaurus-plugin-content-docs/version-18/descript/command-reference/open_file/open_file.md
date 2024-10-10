---
title: 'OPEN_FILE'
description: ""
published: 2021-11-17
redirect_from: 
            - https://www.consteelsoftware.com/manual/descript-cspi/open_file/
hero: ../../../defaultHero.jpg
---

Selects a text file for output.

### Description

Selects a text file for output. In order to be able to [write](/docs/descript/command-reference/write_file/) to a text file, it first has to be opened. The text file has to already be saved to the specified file path for the OPEN_FILE command to work.

### Syntax

**OPEN_FILE** [File path]  

### Command parameters

| **Command parameter**   | **Assignment** | **Value format** | **Input options** |
| ----------------------- | -------------- | ---------------- | ----------------- |
| [File path](#file-path) | Required       | String           | Local, variable   |

#### File path:
Path, file name and extension of the text file.

### Sample code
```
OPEN_FILE c:\Temp\Sample.txt
```
