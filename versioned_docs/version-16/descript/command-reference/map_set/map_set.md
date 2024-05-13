---
title: 'MAP_SET'
description: ""
published: 2021-11-17
redirect_from: 
            - https://www.consteelsoftware.com/manual/descript-cspi/map_set/
hero: ../../../defaultHero.jpg
---

Sets a key-value pair in a map.

### Description

Sets a key-value pair in a map. If the map was not defined previously, then this command will create the map, then store the key-value pair within it.

### Syntax

**MAP_SET** [Map name] \[Key] [Key value]

### Command parameters

| **Command parameter**    | **Assignment** | **Value format** | **Input options** |
| ------------------------ | -------------- | ---------------- | ----------------- |
| [Map name](#map-name)    | Required       | String           | Local, variable   |
| [Key](#key)              | Required       | String           | Local, variable   |
| [Item value](#key-value) | Required       | String           | Local, variable   |

#### Map name:
Name of the map.

#### Key:
The string acting as the key.

#### Key value:
The value paired to the key.

### Sample code
```
MAP_SET Map1 Key1 123
```
