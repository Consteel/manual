---
title: 'ARRAY_SET'
description: ""
published: 2021-11-17
redirect_from: 
            - https://www.consteelsoftware.com/manual/descript-cspi/array_set/
hero: ../../../defaultHero.jpg
---

Sets the value of an item in an array.

### Description

Sets the value of a specific item in an array. If the array was not defined previously, then this command will create the array, and then set the specified item's value.

### Syntax

**ARRAY_SET** [Array name] [Item index] [Item value]

### Command parameters

| **Command parameter**     | **Assignment** | **Value format**       | **Input options** |
| ------------------------- | -------------- | ---------------------- | ----------------- |
| [Array name](#array-name) | Required       | String                 | Local, variable   |
| [Item index](#item-index) | Required       | Integer                | Local, variable   |
| [Item value](#item-value) | Required       | String, integer, float | Local, variable   |

#### Array name:
Name of the array.

#### Item index:
Index number of the item to be set. Indexing starts from 0, so the first item has the index number 0.

#### Item value:
Value of the item to be set.

### Sample code
```
ARRAY_SET Data 0 1234
```
