---
title: 'STRISNUM'
description: ""
published: 2021-11-17
redirect_from: 
            - https://www.consteelsoftware.com/manual/descript-cspi/strisnum/
hero: ../../../defaultHero.jpg
---

Tells if a string is a number or not.

### Description

Tells if a string is a number or not. If the string is a number, then the output is "1", if not then the output is "0". The decimal separator character is what is set by the operating system (typically "." or ",").

### Syntax

**STRISNUM** \[String] [Output variable]

### Command parameters

| **Command parameter**               | **Assignment** | **Value format** | **Input options** |
| ----------------------------------- | -------------- | ---------------- | ----------------- |
| [String](#string)                   | Required       | String           | Local, variable   |
| [Output variable](#output-variable) | Required       | String           | Local, variable   |

#### String:
The string that might be a number.

#### Output variable:
The variable that will store the output.

### Sample code

```
STRISNUM 123 Output_Variable
```
