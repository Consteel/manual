---
title: 'ARRAY_ADD'
description: ""
published: 2021-11-17
redirect_from: 
            - https://www.consteelsoftware.com/manual/descript-cspi/array_add/
hero: ../../../defaultHero.jpg
---

Adds an item to an array.

### Description

Adds an item to an array with the specified value to the first available index number. If the array was not defined previously, then this command will create the array, and then add the item as the first entry (index = 0).

### Syntax

**ARRAY_ADD** [Array name] [Item value]

### Command parameters

| **Command parameter**     | **Assignment** | **Value format**       | **Input options** |
| ------------------------- | -------------- | ---------------------- | ----------------- |
| [Array name](#array-name) | Required       | String                 | Local, variable   |
| [Item value](#item-value) | Required       | String, integer, float | Local, variable   |

#### Array name:

Name of the array.

#### Item value:

Value of the item.

### Sample code

```
ARRAY_ADD Data 1234
```
