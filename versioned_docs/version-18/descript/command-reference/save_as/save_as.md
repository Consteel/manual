---
title: 'SAVE_AS'
description: ""
published: 2021-11-17
redirect_from: 
            - https://www.consteelsoftware.com/manual/descript-cspi/save_as/
hero: ../../../defaultHero.jpg
---

Saves the model to specific storage location.

### Description

Saves the model to specific storage location. The accepted file extensions are the following: csm, csj, obj, anf, smadsteel, asc, csf, dxf, sc1, snf.

### Syntax

**SAVE_AS** [File path]

### Command parameters

| **Command parameter**   | **Assignment** | **Value format** | **Input options** |
| ----------------------- | -------------- | ---------------- | ----------------- |
| [File path](#file-path) | Required       | String           | Local, variable   |

#### File path:
Path, file name and extension of the model file.

### Sample code
```
SAVE_AS c:\Temp\Consteel_Model.csm
```
