---
title: 'EXPLODE'
description: ""
published: 2021-11-17
redirect_from: 
            - https://www.consteelsoftware.com/manual/descript-cspi/explode/
hero: ./img/wp-content-uploads-2021-08-image-74.png
---

Chops up a string with the given separator character and stores the parts in an array.

### Description

Chops up a string with the given separator character and stores the parts in an array. The delimiter will not be included in the outputs.

### Syntax

**EXPLODE** \[String] \[Delimiter] [Output array]  

### Command parameters

| **Command parameter**            | **Assignment** | **Value format** | **Input options** |
| -------------------------------- | -------------- | ---------------- | ----------------- |
| [String](#string)                | Required       | String           | Local, variable   |
| [Delimiter](#delimiter)          | Required       | String           | Local, variable   |
| [Output array](#output-variable) | Required       | String           | Local, variable   |

#### String:
The string that will be chopped up.

#### Delimiter:
The separator character.

#### Output array:
The array that will store the resulting parts.

### Sample code

**Command only:**

```
EXPLODE 123;456;789 ; Output_Array
```

**Command + checking parts:**

```
EXPLODE 123;456;789 ; Output_Array

ARRAY_GET Output_Array 0 String_Part0
ARRAY_GET Output_Array 1 String_Part1
ARRAY_GET Output_Array 2 String_Part2
```

![](./img/wp-content-uploads-2021-08-image-74.png)

